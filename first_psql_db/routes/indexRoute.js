

const Router = require("express").Router();
const { getUsernames } = require("../controllers/newControllers");

Router.get("/", getUsernames);

module.exports = Router;