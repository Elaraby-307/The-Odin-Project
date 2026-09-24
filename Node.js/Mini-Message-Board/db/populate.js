
require("dotenv").config();
const {Client} = require('pg');


const SQL = `
    CREATE TABLE IF NOT EXISTS message (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        sender varchar(20),
        content varchar(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
    );
    
    INSERT INTO message (sender, content) VALUES
    ('John Doe', 'Hello, this is a test message.'),
    ('Jane Smith', 'This is another test message.'),
    ('Alice Johnson', 'Yet another test message for the database.');


`


async function main() {
    const client = new Client({
        user: process.env.DB_ROLE,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.PORT,
    });

    module.export = client;

    await client.connect();

    await client.query(SQL);

    await client.end();

    console.log("DB CREATED SUCCESSFULLY")
    
}

main();