const crypto = require('crypto');
const mongoose = require('mongoose');
const pingsRouter = require('express').Router();
const Ping = require('../models/ping');
const ipQuery = require('./queries/ipQuery');
const scrollQuery = require('./queries/scrollQuery');
const deviceQuery = require('./queries/deviceQuery');
const timeQuery = require('./queries/timeQuery');
const hoverQuery = require('./queries/hoverQuery');

pingsRouter.get('/', async (req, res) => {
  const query = req.query;
  let stats = null;

  if (query.type === 'ip') {
    stats = await ipQuery(query.range, query.unique === 'true');
  } 
  else if (query.type === 'scroll') {
    stats = await scrollQuery();
  }
  else if (query.type === 'device') {
    stats = await deviceQuery();
  } 
  else if (query.type === 'time') {
    stats = await timeQuery();
  }
  else if (query.type === 'hover') {
    stats = await hoverQuery();
  }

  res.json(stats);
});

pingsRouter.post('/', async (req, res) => {
  const { body } = req;
  
  const ping = new Ping({
    hashedIp: crypto.createHash('sha256').update(req.ip).digest('hex'),
    device: body.device || 'null'
  });

  try {
    const savedPing = await ping.save();
    res.status(201).json(savedPing);
  } catch {
    res.status(500).json({ error: 'Could not make Ping in MongoDB' });
  }
});

pingsRouter.patch('/:id', async (req, res) => {
  const { type } = req.body;

  const validTypes = ['HEARTBEAT', 'HOVER', 'MILESTONE'];
  if (!type || !validTypes.includes(type)) {
    return res.status(400).json({ error: 'Invalid or missing interaction type' });
  }

  if (type === 'HEARTBEAT') {
    await Ping.collection.updateOne(
      { _id: new mongoose.Types.ObjectId(req.params.id) },
      [
        {
          $set: {
            'timings.lastPing': new Date(),
            'timings.durationSec': {
              $divide: [
                { $subtract: [new Date(), '$timings.start'] },
                1000
              ]
            }
          }
        }
      ]
    );

    return res.status(200).end();
  }
  
  if (type === 'HOVER') {
    await Ping.findByIdAndUpdate(req.params.id, {
      $inc: { 'interactions.hoverCount': req.body.amount }
    });

    return res.status(200).end();
  }

  if (type === 'MILESTONE') {
    await Ping.findByIdAndUpdate(req.params.id, {
      $addToSet: { 'interactions.scrollMilestones': req.body.milestone}
    });

    return res.status(200).end();
  }
});

pingsRouter.delete('/:id', async (req, res) => {
  await Ping.findByIdAndDelete(req.params.id);
  res.status(204).end();  
});

module.exports = pingsRouter;