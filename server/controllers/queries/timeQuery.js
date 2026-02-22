const Ping = require('../../models/ping');

const timeQuery = async () => {
  const result = await Ping.aggregate([
    {
      $match: {
        'timings.start': { $exists: true },
        'timings.lastPing': { $exists: true }
      }
    },
    {
      $project: {
        duration: { $subtract: ['$timings.lastPing', '$timings.start'] }
      }
    },
    {
      $group: {
        _id: null,
        averageDuration: { $avg: '$duration' }
      }
    }
  ]);

  return result.length > 0 ? (result[0].averageDuration / 1000).toFixed(2) : 0;
};

module.exports = timeQuery;