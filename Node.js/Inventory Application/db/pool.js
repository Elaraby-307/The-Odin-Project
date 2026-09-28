require('dotenv').config();
const {Pool} = require('pg')


const pool = new Pool ({
    host : process.env.DB_HOST,
    password : process.env.DB_PASSWORD,
    role : process.env.DB_ROLE,
    port : process.env.DB_PORT,
    database : process.env.DB_NAME
})

module.exports = pool;