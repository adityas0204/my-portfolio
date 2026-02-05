const Ping = require('../../models/ping');

const scrollQuery = async () => {
  const scrollCount = await Ping.aggregate([
    {
      $project: {
        milestoneCount: { $size: { $ifNull: ['$interactions.scrollMilestones', []] } }
      }
    },
    {
      $project: {
        pageName: {
          $switch: {
            branches: [
              { case: { $eq: ['$milestoneCount', 1] }, then: 'Home' },
              { case: { $eq: ['$milestoneCount', 2] }, then: 'About' },
              { case: { $eq: ['$milestoneCount', 3] }, then: 'Projects' },
              { case: { $eq: ['$milestoneCount', 4] }, then: 'Footer' }
            ],
            default: 'Other'
          }
        }
      }
    },
    {
      $group: {
        _id: '$pageName',
        count: { $sum: 1 }
      }
    },
    {
      $project: {
        _id: 0,
        label: '$_id',
        value: '$count'
      }
    },
    {
      $sort: { value: -1 }
    }
  ]);

  return scrollCount;
};

module.exports = scrollQuery;