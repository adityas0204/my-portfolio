const Ping = require('../../models/ping');

const deviceQuery = async () => {
  const deviceCount = await Ping.aggregate([
    {
      $group: {
        _id: '$device',
        count: { $sum: 1 }
      }
    },
    {
      $project: {
        _id: 0,
        device: { $ifNull: ['$_id', 'Unknown'] },
        count: 1
      }
    }
  ]);

  return deviceCount;
};

module.exports = deviceQuery;