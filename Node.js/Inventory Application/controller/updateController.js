const db = require('../db/queries')

async function getUpdateController(req, res, next){
    const categories = await db.get_category();
    res.render('update',{title : 'Update Item', id: req.params.id, categories});
}

async function postUpdateController(req, res, next){
    await db.updateItem(req.body.id , req.body.name, req.body.price, req.body.category);

    res.redirect('/');
    
    
}


module.exports = {
    getUpdateController,
    postUpdateController
}