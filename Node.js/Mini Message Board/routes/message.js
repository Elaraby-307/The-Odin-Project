const {Router} = require('express')
const {messages} = require('./index')
const messageRouter = Router()


messageRouter.get('/new', (req, res) => {
    res.render('../views/form');
})

messageRouter.post('/new', (req, res) => {
    messages.push({text: req.body.MessageText, user: req.body.UserName, added: new Date()})
    res.redirect('/')
})

module.exports = messageRouter;