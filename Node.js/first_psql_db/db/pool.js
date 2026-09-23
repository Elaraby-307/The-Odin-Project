const pool = require('pg').Pool;

const dbPool = new pool({
  user: 'elaraby307',
  host: 'localhost',
  database: 'top_users',
  password: 'neymar1110!',
  port: 5432,
});

module.exports = dbPool;