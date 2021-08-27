const { Pool } = require('pg');
const login = require('./config.js');

const pool = new Pool({
  user: login.user,
  host: login.host,
  database: login.database,
  password: login.password,
  port: 5432
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  client.query('SELECT NOW()', (err, result) => {
    release()
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    console.log(result.rows[0]);
  })
})

module.exports = pool;
