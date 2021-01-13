// DEPENDENCIES
const express = require('express')

// CONFIGURATION
const app = express()
// require('dotenv').config()
// const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello Kim')
})
// LISTENER
app.listen(3000, () => {
  console.log('listening on port')
})
