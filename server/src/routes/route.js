const app = require('express')()
app
  .use('/User' ,require('./CtrlUsers/User'))
  .all('/*' , (req, res) => res.send('Doesn\'t exist this page'))

module.exports = app
