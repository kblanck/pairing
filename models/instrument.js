const mongoose = require('mongoose')
const instrumentSchema = new mongoose.Schema({
  name: String,
  origin:String,
  howOld:String,
  ytUrl: { type: String, default: 'https://www.youtube.com/watch?v=ewGbdVpEPVM' },
})
const Instrument = mongoose.model('Instrument', instrumentSchema)
module.exports = Instrument
