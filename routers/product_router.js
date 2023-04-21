const express = require("express");
const { addProduct, deleteProducts, getProducts, updateProduct, searchProduct } = require("../controller/product_controller");
Router = express.Router();

Router.route("/add").post(addProduct);
Router.route("/get/:id").get(getProducts);
Router.route("/update/:id").put(updateProduct);
Router.route("/search/:key").get(searchProduct);
Router.route("/delete/:id").delete(deleteProducts);

//changepwd, updateprofile, getuserdata 

module.exports = Router;