const express = require("express");
const { register, login, deleteUsers } = require("../controller/user_controller");
Router = express.Router();

Router.route("/register").post(register);
Router.route("/login").post(login);
Router.route("/delete/:id").delete(deleteUsers);

module.exports = Router;