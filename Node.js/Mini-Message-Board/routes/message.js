const {Router} = require('express')
const messageRouter = Router()
const {getMessage} = require('../controllers/messageController')
const {postMessage} = require('../controllers/messageController')
const {validation, validResult} = require('../controllers/validationController')


messageRouter.get('/new', getMessage)

messageRouter.post('/new', validation, validResult ,postMessage)

module.exports = messageRouter;