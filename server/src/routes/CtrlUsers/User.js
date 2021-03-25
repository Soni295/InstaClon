const Joi = require('joi')




const main = (req, res) => {
  res.send('main')
}

const logIn = (req, res) => {

  const schema = Joi.object().keys({
    user: Joi.string().trim().min(6).required(),
    password: Joi.string().min(8).required()
  })

  const {error, value} = schema.validate(req.body)
  console.log('error', error)
  console.log('value', value)
  if(error) res.status(500).json({msg: 'error user invalid'})
  else res.json({msg: 'success', user: req.body.user})
}

const logOut = (req, res) => {
  res.send('LogOut')
}

const signIn= (req, res) => {
  res.send('signIn')
}

module.exports = {
  main,
  logIn,
  logOut,
  signIn
}
