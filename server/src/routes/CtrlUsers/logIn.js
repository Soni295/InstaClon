const pool = require('../../database')


// addddddd token


const searchUser = async (req, res, next) => {
  const { user, password } = req.body
  const query = 'SELECT * FROM users WHERE users.email = ?'
  pool.query(query, [user], (err, result) => {
    if(err) throw err
    if(result[0]?.password !== password) {
      res.json({msg: 'the user does not exist or the password is wrong'})
    } else next()
  })
}

const Log = async (req, res) => {
  const { user } = req.body
  res.json({user, msg: 'success', token: 'example1'}) // < hereeeeeeeeeeee
}


const LogIn = [searchUser, Log]
module.exports = LogIn
