// const express = require("express")
// const mongoose = require("mongoose")

// const server = express();

// server.use(express.json())

// const dbConnect = () => {
//     try {
//         mongoose.connect("mongodb://localhost:27017/databaseProduct")
//         console.log("mongodb connected");
//     } catch (error) {
//         console.log("mongodb error");
//     }
// }
// dbConnect()

// const productSchema = mongoose.Schema({
//     productName: {
//         type: String,
//     },
//     productPrice: {
//         type: Number
//     },
//     stock: {
//         type: Number
//     },
//     desc: {
//         type: String
//     }
// });

// const Product = mongoose.model("products", productSchema)

// server.post("/createProduct", async(req, res) => {
//     try {
//         const { productName, productPrice, stock, desc } = req.body;
//         const items = await Product.create({
//             productName, productPrice, stock, desc
//         })
//         res.send(items)
//     } catch (error) {
//         console.log(error.message);
//     }
// })

// server.listen(3000, () => {
//     console.log("server start port 3000");
// })

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
        console.log("error message");
    }
});

server.listen(3000, () => {
    console.log("server start port 3000");
});