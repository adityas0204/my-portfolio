const Ping = require('../../models/ping');

const hoverQuery = async () => {
  const hoverStats = await Ping.aggregate([
    {
      $match: {
        'interactions.hoverCount': { $exists: true }
      }
    },
    {
      $group: {
        _id: null,
        totalHovers: { $sum: "$interactions.hoverCount" },
        averageHovers: { $avg: "$interactions.hoverCount" }
      }
    },
    {
      $project: {
        _id: 0,
        totalHovers: 1,
        averageHovers: { $round: ["$averageHovers", 2] }
      }
    }
  ]);

  return hoverStats.length > 0 ? hoverStats[0] : { totalHovers: 0, averageHovers: 0 };
};

module.exports = hoverQuery;