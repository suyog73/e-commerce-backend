const express = require("express");
const { addProduct, deleteProducts, getProducts, updateProduct, searchProduct } = require("../controller/product_controller");
const { verifyToken } = require("../middleware/AuthMiddleware");
Router = express.Router();

Router.route("/add").post(verifyToken, addProduct);
Router.route("/get/:id").get(verifyToken, getProducts);
Router.route("/update/:id").put(verifyToken, updateProduct);
Router.route("/search/:key").get(searchProduct);
Router.route("/delete/:id").delete(verifyToken, deleteProducts);

//changepwd, updateprofile, getuserdata 

module.exports = Router;