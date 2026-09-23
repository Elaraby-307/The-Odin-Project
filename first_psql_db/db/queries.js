const dbpool = require('../db/pool');


async function getAllUsers(username) {
  const {rows} = await dbpool.query('SELECT * FROM usernames WHERE username LIKE $1', [`%${username}%`]);
  return rows;
}




async function insertUser(username) {
  await dbpool.query('INSERT INTO usernames (username) VALUES ($1)', [username]);
}


async function deleteAllUsers() {
  await dbpool.query('TRUNCATE TABLE usernames');
}


module.exports = {
    getAllUsers,
    insertUser,
    deleteAllUsers
};