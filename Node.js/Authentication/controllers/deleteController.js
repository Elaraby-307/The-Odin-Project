const db = require('../db/queries');

async function deleteMessage(req, res, next) {
    const messageId = req.params.id;
    await db.deleteMessage(messageId)
        .then(() => res.redirect('/'))
        .catch((error) => {
            console.error('DATABASE ERROR:', error);
            return res.render('index', { errors: [error], title: 'Forum' });
        });
}

module.exports = { deleteMessage };