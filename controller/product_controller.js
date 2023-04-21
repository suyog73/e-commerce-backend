const product_schema = require("../model/product_model");

exports.addProduct = async (req, res) => {
    try {
        let product = await product_schema.create(req.body);

        res.send(product);

    } catch (error) {
        res.status(500).send({
            message: "Something went wrong...",
            error: error
        });
    }
}

exports.getProducts = async (req, res) => {
    let id = req.params.id;
    try {
        if (id === "all") {
            let products = await product_schema.find();
            if (products.length > 0) {
                res.send(products);
            } else {
                res.send({
                    "result": "No product found"
                });
            }
        }
        else {
            let product = await product_schema.findOne({ _id: id });
            if (product !== null) {
                res.send(product);
            } else {
                res.send({
                    "result": "No product found"
                });
            }
        }
    } catch (error) {
        res.send(error);
    }
}

exports.updateProduct = async (req, res) => {
    let id = req.params.id;
    try {
        let product = await product_schema.updateOne({ _id: id }, { $set: req.body });
        if (product !== null) {
            res.send(product);
        } else {
            res.send({
                "result": "No product found"
            });
        }

    } catch (error) {
        res.send(error);
    }
}

exports.searchProduct = async (req, res) => {
    let key = req.params.key;

    try {
        let result = await product_schema.find({
            "$or": [
                { name: { $regex: key } },
                { company: { $regex: key } },
                { category: { $regex: key } },
            ]
        })

        res.send(result);
    } catch (error) {
        res.send(error);
    }
}

exports.deleteProducts = async (req, res) => {
    const id = req.params.id;
    if (id === "all") {
        const data = await product_schema.deleteMany({});
        res.status(200).send({
            data
        });
    } else {
        try {
            const data = await product_schema.deleteOne({ _id: id });
            res.send(data)
        } catch (error) {
            res.send(error);
        }
    }
}