const express = require('express')
const { main, logIn, logOut, signIn } = require('./CtrlUsers/User')


const error = (req, res) => {
  res.send('Not exist page')
}

const route = express.Router()
route
  .get('/' , main)
  .post('/User/LogIn' , logIn)
  .post('/User/SignIn' , signIn)
  .get('/User/LogOut' , logOut)
  .get('/*' , error)



module.exports = route
