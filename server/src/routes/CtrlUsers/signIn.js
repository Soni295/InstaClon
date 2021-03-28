const pool = require('../../database')

const checkPassword = (req, res, next) => {
  const { password, password2 } = req.body
  if(password !== password2){
    res.json({msg: 'Passwords are different'})
  } else {
    next()
  }
}

const existUser = (req, res, next) => {
  const {user, email} = req.body
  const query =`SELECT * FROM users WHERE users.email = ? OR users.user_name = ?`

  pool.query(query, [email, user], (err, result)=>{
    if(err) throw err
    if(result[0]) {
      res.json({msg: 'sorry this user or email is already registered'})
    } else {
      next()
    }
  })
}

const createUser = (req, res) => {
  const { user,
    email,
    password,
    password2
  } = req.body
  // pool.query('INSERT INTO users set ?', [newUser])
  res.json({msg: 'your account has been created successfully'})
}

const signIn = [checkPassword, existUser, createUser]

module.exports = signIn
