const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    "name": {
        required: true,
        type: String,
    },
    "email": {
        required: true,
        type: String,
    },
    "password": {
        required: true,
        type: String,
    }
});

module.exports = mongoose.model("users", userSchema);
