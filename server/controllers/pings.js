const crypto = require('crypto')
const pingsRouter = require('express').Router()
const Ping = require('../models/ping')

pingsRouter.get('/', async (req, res) => {
  const pings = await Ping.find({})
  res.json(pings)
})

pingsRouter.post('/', async (req, res) => {
  const body = req.body
  console.log('recieved a ping')
  
  const ping = new Ping({
    hashedIp: crypto.createHash('sha256').update(req.ip).digest('hex'),
    device: body.device
  })

  const savedPing = await ping.save()
  res.status(201).json(savedPing)
})

pingsRouter.patch('/:id', async (req, res) => {
  const type = req.body.type

  if (type === "HEARTBEAT") {
      await Ping.findByIdAndUpdate(req.params.id, {
        $set: { 
          "timings.lastPing": new Date(),
          "timings.durationSec": { // get the new date (basically the last ping), and then subtract it and divide it to go from milliseconds to seconds
            $divide: [
              { $subtract: [new Date(), "$timings.start"] },
              1000
            ]
          }
        }
      })

      return res.status(200).end()
  }
  
  if (type === "HOVER") {
    await Ping.findByIdAndUpdate(req.params.id, {
      $inc: { "interactions.hoverCount": req.body.amount }
    })

    return res.status(200).end()
  }

  if (type === "MILESTONE") {
    await Ping.findByIdAndUpdate(req.params.id, {
      $addToSet: { "interactions.scrollMilestones": req.body.milestone}
    })

    return res.status(200).end()
  }
})

pingsRouter.delete('/:id', async (req, res) => {
    await Ping.findByIdAndDelete(req.params.id)
    res.status(204).end()  
})

module.exports = pingsRouter