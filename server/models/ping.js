const mongoose = require('mongoose');
const { MONGODB_COLLECTION } = require('../util/config');

mongoose.set('strictQuery', false);

const pingSchema = new mongoose.Schema({
  hashedIp: String,
  device: String,
  timings: {
    start: {
      type: Date,
      default: Date.now
    },
    lastPing: {
      type: Date,
      default: Date.now
    },
    durationSec: {
      type: Number,
      default: 0
    }
  },
  interactions: {
    hoverCount: {
      type: Number,
      default: 0
    },
    scrollMilestones: { 
      type: [String],
      default: []
    }
  }
});

pingSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model(MONGODB_COLLECTION, pingSchema);