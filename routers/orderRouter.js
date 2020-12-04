const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Order = require('../models/orderModel');
const isAuth = require('../untils/checkToken');

const orderRouter = express.Router();

orderRouter.get('/mine', isAuth, expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.status(200).send(orders);
}))

orderRouter.post('/', isAuth, expressAsyncHandler(async (req, res) => {
    const order = new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        totalPrice: req.body.totalPrice,
        shippingPrice: req.body.shippingPrice,
        grabPrice: req.body.grabPrice,
        totalPayment: req.body.totalPayment,
        user: req.user._id
    })

    const createdOrder = await order.save();
    res.status(201).send({ message: 'Tao order thanh cong', order: createdOrder })
}))

orderRouter.get('/:id', isAuth, expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (!order) {
        return res.status(404).send({ message: 'Khong tim thay product ' });
    }
    res.status(200).send(order);
}))

orderRouter.put('/:id/pay', isAuth, expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (!order) {
        return res.status(404).send({ message: 'Khong tim thay order' });
    }
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        email_address: req.body.payer.email_address,
        update_time: req.body.update_time
    }
    const updatedOrder = await order.save();
    res.status(200).send({ message: 'Update thanh cong', order: updatedOrder })
}))

module.exports = orderRouter;