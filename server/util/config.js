require('dotenv').config();

const PORT = process.env.PORT || 3001;
const MONGODB_COLLECTION = process.env.NODE_ENV === 'production' ? 'Ping' : 'TestPing';

module.exports = {
  PORT,
  MONGODB_COLLECTION
};