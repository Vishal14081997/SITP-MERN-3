const express = require("express");
const mongoose = require("mongoose");

const server = express();

server.use(express.json());

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/product_db");
        console.log("db connect success");
    } catch (error) {
        console.log("db connect fail");
    }
}
dbConnect();

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
    },
    productPrice: {
        type: Number
    },
    stock: {
        type: Number
    },
    desc: {
        type: String
    }
});

const Product = mongoose.model("products", productSchema);

server.post("/createProduct", async (req, res) => {
    try {
        const { productName, productPrice, stock, desc } = req.body;
        const items = await Product.create({
            productName,
            productPrice,
            stock,
            desc
        });
        res.send(items);

    } catch (error) {
        console.log("createProduct", error.message);
    }
});

server.get("/getAllProduct", async (req, res) => {
    try {
        const getProducts = await Product.find()
        res.status(200).json({
            message: "get all product",
            data: getProducts
        })
    } catch (error) {
        console.log("getAllProduct", error.message);
    }
})
server.get("/getProduct/:id", async (req, res) => {
    try {
        const productId = req.params.id
        console.log(productId);

        const getPoduct = await Product.findById(productId)
        console.log(getPoduct);
        res.status(200).json({
            message: "get product",
            data: getPoduct
        })
    } catch (error) {
        console.log("getProduct", error.message);
    }
})
server.put("/updateProduct/:id", async (req, res) => {
    try {
        const productId = req.params.id
        // console.log(productId);
        const product = await Product.findByIdAndUpdate(productId, req.body, { new: true })
        res.status(200).json({
            message: "product update",
            data: product
        })
    } catch (error) {
        console.log("updateProduct", error.message);
    }
})

server.listen(3000, () => {
    console.log("server start port 3000");
});



// 200 - success
// 201 - create
// 400 - BAD_REQUEST
// 401 - Unauthorized
// 403 - Forbidden
// 404 - not found
// 500 - Internal Server Error

