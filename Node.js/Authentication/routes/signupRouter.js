
const { validation, result } = require('../middleware/signup');
const authController = require('../controllers/authController');

const signupRouter = require('express').Router()



signupRouter.get('/sign-up', authController.getSignUp);
signupRouter.post('/sign-up', validation, result ,authController.postSignUp);

module.exports = signupRouter;
