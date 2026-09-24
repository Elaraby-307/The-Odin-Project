const {Router} = require('express')
const messageRouter = Router()
const {getMessage} = require('../controllers/messageController')
const {postMessage} = require('../controllers/messageController')


messageRouter.get('/new', getMessage)

messageRouter.post('/new', postMessage)

module.exports = messageRouter;