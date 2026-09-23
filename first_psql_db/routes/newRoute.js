const Router = require("express").Router();
const {createUsernameGet} = require("../controllers/newControllers");
const {createUsernamePost} = require("../controllers/newControllers");

Router.get("/new", createUsernameGet);

Router.post("/new", createUsernamePost);

module.exports = Router;