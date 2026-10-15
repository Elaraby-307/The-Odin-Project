const pool = require('./pool');
const bcrypt = require('bcryptjs')



async function postSignUp(fname, lname, email, password) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      'INSERT INTO "user" ("fname", "lname", "email", "passwords") VALUES ($1, $2, $3, $4)',
      [fname, lname, email, hashedPassword]
    );
  } catch (error) {
    console.error('DATABASE ERROR:', error);
    throw error;
  }
}



async function getAllMessages(){
  const {rows} = await pool.query('SELECT message.id AS id, fname || \' \' || lname AS username, title, body, timestam FROM "user" JOIN message ON "user".id = message.user_id;');
  return rows;
}





async function findUser(email) {
    const { rows } = await pool.query(
        'SELECT * FROM "user" WHERE email = $1',
        [email]
    );

    return rows[0];
}

async function findUserByID(id) {
    const { rows } = await pool.query(
        'SELECT * FROM "user" WHERE id = $1',
        [id]
    );

    return rows[0];
}

async function updateMembership(userId, membership) {
    await pool.query(
        'UPDATE "user" SET membership = $1 WHERE id = $2',
        [membership, userId]
    );
}


async function insertMessage(tile, body, userId) {
  try {
    await pool.query(
      'INSERT INTO message (title, body, user_id) VALUES ($1, $2, $3)',
      [tile, body, userId]
    );
  } catch (error) {
    console.error('DATABASE ERROR:', error);
    throw error;
  }
}


async function deleteMessage(messageId) {
  try {
    await pool.query(
      'DELETE FROM message WHERE id = $1',
      [messageId]
    );
  } catch (error) {
    console.error('DATABASE ERROR:', error);
    throw error;
  }
}


async function updateAdmin(email, admin) {
  try {
    await pool.query(
      'UPDATE "user" SET is_admin = $1 WHERE email = $2',
      [admin, email]
    );
  } catch (error) {
    console.error('DATABASE ERROR:', error);
    throw error;
  }
}



module.exports = {postSignUp, getAllMessages, findUser, findUserByID, updateMembership, insertMessage, deleteMessage, updateAdmin};



