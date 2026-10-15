const deleteController = require('../controllers/deleteController');
const { requireAuth, requireAdmin } = require('../middleware/auth');

const deleteRouter = require('express').Router();

deleteRouter.get('/delete/:id', requireAuth, requireAdmin, deleteController.deleteMessage);

module.exports = deleteRouter;