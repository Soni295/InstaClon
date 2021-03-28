const express = require('express')
const route = express.Router()

route
  .post('/LogIn', require('./logIn'))
  .post('/SignIn', require('./signIn'))

module.exports = route
