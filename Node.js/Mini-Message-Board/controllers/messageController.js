const {insertNewMessage} = require('../db/queries') 

function getMessage (req, res) {
    res.render('form');
}




function postMessage (req, res)  {
    insertNewMessage(req.body.sender, req.body.content);
    res.redirect('/');
}

module.exports = {
    getMessage,
    postMessage
}