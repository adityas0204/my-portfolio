const Ping = require('../../models/ping');

const ipQuery = async (range, unique = false) => {
  const isMonthView = range === '6';
  let daysToSub = parseInt(range);
  
  const current = new Date();
  const today = new Date();
  
  if (isMonthView) {
    current.setUTCMonth(current.getUTCMonth() - 5);
    current.setUTCDate(1);
    current.setUTCHours(0, 0, 0, 0);
    daysToSub = 180; 
  } else {
    current.setUTCDate(current.getUTCDate() - daysToSub);
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
            date: { $dateToString: { format: isMonthView ? '%Y-%m' : '%Y-%m-%d', date: '$timings.start' } },
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
          $dateToString: { format: isMonthView ? '%Y-%m' : '%Y-%m-%d', date: '$timings.start' } 
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
      dateStr = current.toISOString().slice(0, 7); // YYYY-MM
    } else {
      dateStr = current.toISOString().slice(0, 10); // YYYY-MM-DD
    }
    
    const label = isMonthView ? dateStr : dateStr.slice(5); // Keep YYYY-MM or just MM-DD
    
    if (!allDates.find(d => d.date === label)) {
      allDates.push({
        date: label,
        count: dataMap[dateStr] || 0
      });
    }
    
    if (isMonthView) {
      current.setUTCMonth(current.getUTCMonth() + 1);
    } else {
      current.setUTCDate(current.getUTCDate() + 1);
    }
  }
  
  return allDates;
};

module.exports = ipQuery;