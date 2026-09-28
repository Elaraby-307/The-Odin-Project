const db = require('../db/queries');

async function createController(req, res) {
    const choice = req.query.choice;
    const categories = await db.get_category();
    if (!choice) {
        return res.render('createChoice', { title: 'Create Product' });
    }

    if (choice === 'new') {
        return res.render('createNew', { title: 'Create Product' });
    }

    return res.render('createExist', { title: 'Create Product' , categories});
}

module.exports = createController;