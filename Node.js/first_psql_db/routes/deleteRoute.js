const Route = require("express").Router();
const { deleteAllUsers } = require("../controllers/newControllers");

Route.get("/delete", deleteAllUsers);

module.exports = Route;