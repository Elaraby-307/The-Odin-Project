const {Router} = require('express')
const messageRouter = Router()

messageRouter.get('/new', (req, res) => {
    res.send('Welcome to the Mini Message Board!');
})

module.exports = messageRouter;