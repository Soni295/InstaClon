console.log(process.env.HOST)
module.exports = {
  database: {
    connectionLimit: 10,
    host: process.env.HOST || 'localhost', // default localhost
    user: process.env.USER || 'root', // default root or [username]
    password: process.env.PASSWORD || '', // default ''
    database: process.env.DB || 'instaclonDB'// instaclonDB
  }
};
