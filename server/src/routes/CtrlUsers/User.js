const express = require('express')
const route = express.Router()



route
  .post('/LogIn', require('./logIn'))
  .post('/SignIn', require('./signIn'))
  .delete('/Delete', require('./delete'))

module.exports = route
