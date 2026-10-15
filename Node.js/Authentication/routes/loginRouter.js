const loginRouter = require('express').Router();
const { passport } = require('../controllers/loginController');

const loginController = require('../controllers/loginController')

loginRouter.get('/log-in', loginController.getLogin);
loginRouter.post('/log-in', 
    passport.authenticate('local', {
    successRedirect: "/",
    failureRedirect: "/log-in",
    failureMessage: true,
  }))

module.exports = loginRouter ;