const updateRouter = require('express').Router();
const updateController = require('../controller/updateController')


updateRouter.get('/update/:id',updateController.getUpdateController);

updateRouter.post('/update/:id',updateController.postUpdateController);


module.exports = updateRouter;