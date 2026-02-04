const Ping = require('../../models/ping');

const ipQuery = async () => {
  const pipeline =   [
    {
      $group: {
        _id: { 
          $dateToString: { format: '%Y-%m-%d', date: '$timings.start', timezone: 'America/Edmonton' } 
        },
        count: { $sum: 1 }
      }
    },
    {
      $sort: { '_id': 1 }
    },
    {
      $project: {
        _id: 0,
        date: '$_id',
        count: 1
      }
    }
  ];

  const rawData = await Ping.aggregate(pipeline);
  const dataMap = rawData.reduce((map, curr) => {
    map[curr.date] = curr.count;
    return map;  
  }, {});

  const allDates = [];
  const current = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000);
  const today = new Date();

  while (current <= today) {
    const dateStr = current.toLocaleDateString('sv-SE', { timeZone: 'America/Edmonton' });
    allDates.push({
      date: dateStr.slice(5),
      count: dataMap[dateStr] || 0
    });
    current.setDate(current.getDate() + 1);
  }

  return allDates;
};

module.exports = ipQuery;