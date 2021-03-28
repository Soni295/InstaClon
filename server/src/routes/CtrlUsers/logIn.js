const pool = require('../../database')

const searchUser = async (req, res, next) => {

  const { user, password } = req.body

  pool.query('SELECT * FROM users WHERE users.email = ?', [user],
    (err, result) => {
      if(err) throw err
      if(result[0]?.password !== password){
        res.json({msg: 'the user does not exist or the password is wrong'})
      }
      else next()
  })
}

const Log = async (req, res) => {
  const { user } = req.body
  res.json({user, msg: 'success'})
}

const LogIn = [searchUser, Log]

module.exports = LogIn
