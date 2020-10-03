const { createUser, loginUser, sendMail } = require('./user.controller');
const userRouter = require('express').Router();

userRouter.post('/register', createUser)
userRouter.post('/login', loginUser)
userRouter.post('/mail', sendMail)

module.exports = userRouter;
