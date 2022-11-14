const express = require('express');
const router = express.Router();

const authRouter = require('./auth.router');
const userRouter = require('./user.router');
const todoRouter = require('./todo.router');
const { route } = require('./user.router');


router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/todo", todoRouter)

module.exports = router
