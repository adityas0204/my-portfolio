const express = require('express')
const mongoose = require('mongoose')
const pingsRouter = require('./controllers/pings')
require('dotenv').config()

const app = express()
const url = process.env.MONGODB_URI

console.log(`connecting to MongoDB`);
(async () => {
  try {
    await mongoose.connect(url)
    console.log('connected to MongoDB')
  } catch (error) {
    console.log('error connecting to MongoDB:', error.message)
  }
})()

app.use(express.static('dist'))
app.use(express.json())

app.use('/api/pings', pingsRouter)

module.exports = app

