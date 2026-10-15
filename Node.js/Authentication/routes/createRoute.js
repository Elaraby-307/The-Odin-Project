const createController = require('../controllers/createController');
const createRouter = require('express').Router();
const { requireAuth } = require('../middleware/auth');

createRouter.get('/create', requireAuth ,createController.getCreate);
createRouter.post('/create', requireAuth ,createController.validation, createController.result, createController.postCreate);

module.exports = createRouter;