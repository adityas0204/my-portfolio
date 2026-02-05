const Ping = require('../../models/ping');

const ipQuery = async (range, unique = false) => {
  const isMonthView = range === '6';
  let daysToSub = parseInt(range);
  
  const current = new Date();
  const today = new Date();

  if (isMonthView) {
    current.setMonth(current.getMonth() - 5);
    current.setDate(1);
    current.setHours(0, 0, 0, 0);
    daysToSub = 180; 
  } else {
    current.setDate(current.getDate() - daysToSub);
  }

  const pipeline = [
    {
      $match: {
        'timings.start': { $gte: new Date(Date.now() - daysToSub * 24 * 60 * 60 * 1000) }
      }
    }
  ];

  if (unique) {
    pipeline.push(
      {
        $group: {
          _id: {
            date: { $dateToString: { format: isMonthView ? '%Y-%m' : '%Y-%m-%d', date: '$timings.start', timezone: 'America/Edmonton' } },
            ip: '$hashedIp'
          }
        }
      },
      {
        $group: {
          _id: '$_id.date',
          count: { $sum: 1 }
        }
      }
    );
  } else {
    pipeline.push({
      $group: {
        _id: { 
          $dateToString: { format: isMonthView ? '%Y-%m' : '%Y-%m-%d', date: '$timings.start', timezone: 'America/Edmonton' } 
        },
        count: { $sum: 1 }
      }
    });
  }

  pipeline.push(
    { $sort: { '_id': 1 } },
    { $project: { _id: 0, date: '$_id', count: 1 } }
  );

  const rawData = await Ping.aggregate(pipeline);
  const dataMap = rawData.reduce((map, curr) => {
    map[curr.date] = curr.count;
    return map;  
  }, {});

  const allDates = [];

  while (current <= today) {
    let dateStr;
    if (isMonthView) {
      dateStr = current.toLocaleDateString('sv-SE', { timeZone: 'America/Edmonton' }).slice(0, 7);
    } else {
      dateStr = current.toLocaleDateString('sv-SE', { timeZone: 'America/Edmonton' });
    }

    const label = isMonthView ? dateStr : dateStr.slice(5);

    if (!allDates.find(d => d.date === label)) {
      allDates.push({
        date: label,
        count: dataMap[dateStr] || 0
      });
    }

    if (isMonthView) {
      current.setMonth(current.getMonth() + 1);
    } else {
      current.setDate(current.getDate() + 1);
    }
  }

  return allDates;
};

module.exports = ipQuery;