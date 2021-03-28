// imports
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {SERVER ,PORT} = require('./VARIABLES')

// server
const app = express()

// const
const corsOptions = {
  origin: SERVER,
  optionsSuccessStatus: 200
}

app
  .use(cors(corsOptions))
  .use(bodyParser.urlencoded({extended: false}))
  .use(bodyParser.json())
  .use(require('./routes/route'))
  .listen(PORT , ()=> {
    console.log(`The server is listering in the port ${PORT}`)
})
