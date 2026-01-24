require('dotenv').config();

const PORT = process.env.PORT || 3001;
const MONGODB_COLLECTION = process.env.NODE_ENV === "production" ? "Ping" : "TestPing"
console.log(typeof(MONGODB_COLLECTION))

module.exports = {
  PORT,
  MONGODB_COLLECTION
};