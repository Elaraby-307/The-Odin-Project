const deleteRoute = require('express').Router();
const deleteController = require('../controller/deleteController')

deleteRoute.get('/delete/:id', deleteController);


module.exports = deleteRoute ;