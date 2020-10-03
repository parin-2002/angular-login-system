const adminRouter = require('express').Router()
const tokenVerify = require('../auth/verify_token')
const { createAdmin, loginAdmin, selectUser, userDelete, userUpdate } = require('./admin.controller')

adminRouter.post('/register', tokenVerify, createAdmin)
adminRouter.post('/login', loginAdmin)
adminRouter.get('/getuser', tokenVerify, selectUser)
adminRouter.post('/deluser', tokenVerify, userDelete)
adminRouter.post('/userup/:id', tokenVerify, userUpdate)

module.exports = adminRouter;