const db = require('../db/queries');

async function deleteItem(req, res, next){
    await db.deleteItem(req.params.id);
    res.redirect('/');
}

module.exports = deleteItem;