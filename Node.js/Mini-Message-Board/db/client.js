require('dotenv').config();
const {Client} = require('pg');





const client = new Client({
    user: process.env.DB_ROLE,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.PORT,
});


client.connect();


module.exports = client ;



    
    