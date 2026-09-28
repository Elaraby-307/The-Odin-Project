const indexRoute = require('express').Router();

const indexController = require('../controller/indexController')


indexRoute.get('/', indexController.indexController) ;
indexRoute.post('/', indexController.indexPostController) ;


module.exports = indexRoute;
