const client = require('./client')


async function getAllMessages(){
    const messages = await client.query(`SELECT * FROM message`);
    return messages.rows;

}

async function insertNewMessage(sender, content){
    await client.query(`INSERT INTO message (sender, content) Values ($1 ,$2) `, [sender, content]);
}


module.exports = {
    getAllMessages,
    insertNewMessage
}