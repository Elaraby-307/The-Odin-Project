const membershipController = require('../controllers/membershipController');
const membershipRouter = require('express').Router();
const { requireAuth } = require('../middleware/auth');

membershipRouter.get('/membership', requireAuth, membershipController.getMembership);
membershipRouter.post('/membership', requireAuth, membershipController.postMembership);

module.exports = membershipRouter;
