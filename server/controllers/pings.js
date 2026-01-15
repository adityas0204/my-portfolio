const pingsRouter = require('express').Router()
const Ping = require('../models/ping')

pingsRouter.get('/', async (req, res) => {
  const pings = await Ping.find({})
  res.json(pings)
})

pingsRouter.post('/', async (req, res) => {
  const ping = new Ping({
    date: new Date(),
    ip: req.ip,
  })

  const savedPing = await ping.save()
  res.status(201).json(savedPing)
})

pingsRouter.delete('/:id', async (req, res) => {
    await Ping.findByIdAndDelete(req.params.id)
    res.status(204).end()  
})

module.exports = pingsRouter