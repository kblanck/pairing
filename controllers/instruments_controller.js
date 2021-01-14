const express = require('express')
const instruments = express.Router()


const Instrument = require('../models/Instrument.js')
const instrumentSeed = require('../models/instrument_seed.js')

instruments.get('/', (req, res) => {
  Instrument.find({}, (err, foundInstruments) => {
    res.json(foundInstruments)
  })
})


//Route
instruments.post('/', (req, res) => {
  Instrument.create(req.body, (err, createdInstrument) => {
    Instrument.find({}, (err, foundInstruments) => {
      res.json(foundInstruments)
    })
  })
})
instruments.put('/:id', (req, res) => {
  Instrument.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedInstrument) => {
      if (err) {
        res.send(err)
      } else {
        Instrument.find({}, (err, foundInstruments) => {
          res.json(foundInstruments)
        })
      }
    }
  )
})
instruments.delete('/:id', (req, res) => {
  Instrument.findByIdAndRemove(req.params.id, (err, deletedInstrument) => {
    Instrument.find({}, (err, foundInstruments) => {
      res.json(foundInstruments)
    })
  })
})
instruments.get('/seed', (req, res) => {
  Instrument.insertMany(instrumentSeed, (err, manyInstruments) => {
    res.redirect('/')
  })
})

module.exports = instruments
