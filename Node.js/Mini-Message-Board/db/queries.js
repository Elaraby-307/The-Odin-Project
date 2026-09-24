const pool = require('./pool')


async function getAllMessages(){
    const messages = await pool.query(`SELECT * FROM message`);
    return messages.rows;

}

async function insertNewMessage(sender, content){
    await pool.query(`INSERT INTO message (sender, content) Values ($1 ,$2) `, [sender, content]);
}


module.exports = {
    getAllMessages,
    insertNewMessage
}