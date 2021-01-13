const express = require('express')
const instruments = express.Router()

instruments.get('/', (req, res) => {
  res.send('index')
})

module.exports = instruments
