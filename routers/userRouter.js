const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const data = require('../data');
const bcrypt = require('bcryptjs');
const generateToken = require('../untils/generateToken');
const isAuth = require('../untils/checkToken');

const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send(createdUsers);
}))

userRouter.get('/:id', isAuth, expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).send('Khong tim thay user')
    }
    res.status(200).send(user);
}))

//Dang nhap user
userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(401).send({ message: 'Khong tim thay users' });
    }
    const isMatch = bcrypt.compareSync(req.body.password, user.password);
    if (!isMatch) {
        return res.status(401).send({ message: 'Sai mat khau vui long nhap lai' })
    }
    res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user)
    })
}))

userRouter.post('/register', expressAsyncHandler(async (req, res) => {
    const user = new User({ name: req.body.name, email: req.body.email, password: bcrypt.hashSync(req.body.password, 8) });
    const createdUser = await user.save();
    res.send({
        _id: user._id,
        name: createdUser.name,
        email: createdUser.email,
        isAdmin: user.isAdmin,
        token: generateToken(createdUser)
    })
}))

userRouter.put('/profile', isAuth, expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
            user.password = bcrypt.hashSync(req.body.password, 8);
        }
        const updatedUser = await user.save();
        res.send({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser)
        });
    }
}))


module.exports = userRouter;