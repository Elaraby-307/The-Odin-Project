const {getAllMessages} = require('../db/queries')

async function indexController (req, res)  {
    const messages = await getAllMessages(); 
    res.render('index',{title: "Mini Message Board", messages: messages});
}



module.exports = {
    indexController
}