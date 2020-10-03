const express = require('express')
const app = express()
const cors = require('cors')
const userRouter = require('./api/user/user.router')
const adminRouter = require('./api/admin/admin.router')
const port = 3000

app.use(express.json())
app.use(cors()) //it is cros verify two server angular server + node server cros vrrify
//without cros you can not parform many opration like delete,post etc request 
app.use('/api/user', userRouter)
app.use('/api/admin', adminRouter)
app.get('/', (req, res) => res.json({ success: 1, message: "api working..." }))

app.listen(port, () => console.log(`server run at http://localhost:${port}`))