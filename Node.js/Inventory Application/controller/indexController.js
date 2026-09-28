const db = require('../db/queries');

async function indexController(req, res, next) {
    const category = req.query.category;
    const categories = await db.get_category(); 
    const rows = category ? await db.getPartItems(category) : await db.getAllItems();
    res.render('index', { rows, category, categories });
}

async function indexPostController(req, res, next) {
    const categoryName = req.body.newCategory && req.body.newCategory.trim()
        ? req.body.newCategory.trim()
        : req.body.category;

    if (req.body.newCategory && req.body.newCategory.trim()) {
        await db.add_category(categoryName);
    }

    await db.CreateItem(req.body.name, req.body.price, categoryName);
    res.redirect('/');
}

module.exports = {indexController,indexPostController};