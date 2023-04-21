const user_schema = require("../model/user_model")
const Jwt = require("jsonwebtoken");

require('dotenv').config();

const jwtKey = process.env.JWTSecret;

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        let user = await user_schema.create({ name, email, password });

        user = user.toObject();
        delete (user.password);
        Jwt.sign({ user }, jwtKey, (err, token) => {
            res.send({ user, token });
        })
    } catch (error) {
        res.status(500).send({
            message: "Something went wrong...",
            error: error
        });
    }
}

exports.login = async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;

        if (email && password) {
            let user = await user_schema.findOne({ email, password }).select("-password");

            if (user) {
                Jwt.sign({ user }, jwtKey, (err, token) => {
                    res.send({ user, token });
                })
            }
            else
                res.send({ error: "No user found" });
        } else {
            res.send({ error: "No user found" });
        }
    } catch (error) {
        res.status(500).send({
            "message": "Something went wrong...",
            error
        })
    }
}

exports.deleteUsers = async (req, res) => {
    const id = req.params.id;
    if (id === "all") {
        const data = await user_schema.deleteMany({});
        res.status(200).send({
            data
        });
    }
}