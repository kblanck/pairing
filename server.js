// DEPENDENCIES
const express = require('express')


// CONFIGURATION
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

const instrumentsController = require('./controllers/instruments_controller.js')
app.use('/instruments', instrumentsController)





// app.get('/', (req, res) => {
//   res.send('Hello Kim')
// })











// LISTENER
app.listen(PORT, () => {
  console.log('listening on port',PORT)
})
