const Joi = require('joi')
const pool = require('../../database')
const express = require('express')
const route = express.Router()
const jwt = require('jsonwebtoken')


route
  .post('/LogIn', (req, res) => {
    const { user, password } = req.body
    const schema = Joi.object().keys({
      user: Joi.string().trim().min(6).max(30).required(),
      password: Joi.string().min(8).max(40).required()
    })
    const { error, value } = schema.validate({user, password})

    if(error) res.status(500).json({msg: 'error user invalid'})
    else {
      jwt.sign({user: user}, 'secretKey', (err, token) => {
        if(err) res.json({msg: 'there was an error creating the token'})
        else res.json({user, token: token, msg: 'success'})
      })
    }
  })
  .post('/SignIn', (req, res) => {
    const newUser =
    pool.query('INSERT INTO users set ?', [newUser])
  })


const logOut = (req, res) => {
  res.send('LogOut')
}

const signIn= (req, res) => {
  res.send('signIn')
}

module.exports = route
