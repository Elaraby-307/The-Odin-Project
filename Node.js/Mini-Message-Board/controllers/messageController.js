const {insertNewMessage} = require('../db/queries') 

function getMessage (req, res) {
    res.render('form');
}




async function postMessage (req, res)  {
    await insertNewMessage(req.body.sender, req.body.content);
    res.redirect('/');
}

module.exports = {
    getMessage,
    postMessage
}