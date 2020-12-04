const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const data = require('../data');
const Product = require('../models/productModel');

const productRouter = express.Router();

productRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    await Product.remove({});
    const createdProduct = await Product.insertMany(data.products);
    res.send(createdProduct);
}))

productRouter.get('/', expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
}))

productRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).send({ message: 'Ko tim thay product' });
    }
    res.send(product);
}))

module.exports = productRouter;