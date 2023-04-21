const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
    "name": {
        required: true,
        type: String,
    },
    "price": {
        required: true,
        type: String,
    },
    "category": {
        required: true,
        type: String,
    },
    "userId": {
        required: true,
        type: String,
    },
    "company": {
        required: true,
        type: String,
    }
});

module.exports = mongoose.model("products", productSchema);
