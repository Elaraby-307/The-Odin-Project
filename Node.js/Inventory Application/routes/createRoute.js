const createRoute = require('express').Router();
const createController = require('../controller/creatController')

createRoute.get('/create', createController);

module.exports = createRoute;

