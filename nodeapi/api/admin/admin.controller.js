const { create, login, selectu, userd, useru } = require('./admin.service')
const { sign } = require('jsonwebtoken')

function createAdmin(req, res) {
    create(req.body).then(data => {
        return res.json({ success: 1, result: data })
    }).catch(err => {
        return res.json({ success: 0, result: err })
    });
}

function loginAdmin(req, res) {
    login(req.body).then(data => {
        if (data.length != 0) {
            data[0].password = undefined;
            const jsontoken = sign({ result: data }, "qwe1234", { expiresIn: '1h' })
            //console.log(jsontoken)
            return res.json({ success: 1, token: jsontoken, result: data })
        }
        return res.json({ success: 0, message: "invalid username or password" })
    }).catch(err => {
        return res.json({ success: 0, result: err })
    })
}

function selectUser(req, res) {
    selectu().then(data => {
        return res.json({ success: 1, result: data })
    }).catch(err => {
        return res.json({ success: 0, result: err })
    })
}

function userDelete(req, res) {
    userd(req.body).then(data => {
        return res.json({ success: 1, result: data })
    }).catch(err => {
        return res.json({ success: 0, result: err })
    })
}

function userUpdate(req, res) {
    useru(req.params.id, req.body).then(data => {
        return res.json({ success: 1, result: data })
    }).catch(err => {
        return res.json({ success: 0, result: err })
    })
}

module.exports = { createAdmin, loginAdmin, selectUser, userDelete, userUpdate }