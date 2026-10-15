const logoutController = require('../controllers/authController');
const logoutRouter = require('express').Router();
const { requireAuth } = require('../middleware/auth');

logoutRouter.get('/log-out', requireAuth, logoutController.getLogout);

module.exports = logoutRouter;