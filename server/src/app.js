// imports
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const route = require('./routes/route')
const mysql = require('mysql')

// server
const app = express()

// const
const PORT = 5000
const server = "http://localhost:3000"

const corsOptions = {
  origin: server,
  optionsSuccessStatus: 200
}

app
  .use(cors(corsOptions))
  .use(bodyParser.urlencoded({extended: false}))
  .use(bodyParser.json())
  .use(route)

  .listen(PORT , ()=> {
  console.log(`The server is listering in the port ${PORT}`)
})
