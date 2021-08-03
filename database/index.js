const { Pool, Client } = require('pg');
//const login = require('./config.js');

const pool = new Pool({
  user: 'masonhoffman',
  host: 'localhost',
  database: 'zwiftAnalyzer',
  // database: login.database,
  password: 'postgres',
  // password: login.password,
  port: 5432,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  } else {
    console.log('Connected to Database');
  }
  client.query('SELECT NOW()', (err, result) => {
    release()
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    console.log(result.rows)
  })
})

module.exports = pool;