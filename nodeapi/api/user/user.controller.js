const { create, login } = require('./user.service')
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');

function createUser(req, res) {
    create(req.body).then(data => {
        return res.json({ success: 1, result: data })
    }).catch(err => {
        return res.json({ success: 0, result: err })
    });
}

function loginUser(req, res) {
    login(req.body).then(data => {
        if (data.length != 0) {
            data[0].password = undefined;
            const jsontoken = sign({ result: data }, "qwe1234", { expiresIn: '1h' })
            // console.log(jsontoken)
            return res.json({ success: 1, token: jsontoken, result: data })
        }
        return res.json({ success: 0, message: "invalid username or password" })
    }).catch(err => {
        return res.json({ success: 0, result: err })
    })
}

function sendMail(req, res) {
    //to,subject,text pass in body
    console.log(req)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'Enter your mail id',
            pass: 'also password'
        }
    });
    const mailOptions = {
        from: 'your mail id',
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return res.json({ success: 0, message: err })
        } else {
            return res.json({ success: 1, message: info })
        }
    });
}

module.exports = { createUser, loginUser, sendMail }