const pool = require('../config/db')

function create(data) {
    return new Promise(function (resolve, reject) {
        pool.query(`insert into user(username,email,mobileno,password) values(?,?,?,?)`,
            [data.username, data.email, data.mobileno, data.password], (err, result) => {
                if (err) {
                    reject(err)
                }
                resolve(result)
            })
    })
}

function login(data) {
    return new Promise(function (resolve, reject) {
        pool.query(`select username,email,password from user where username=? AND password=?`,
            [data.username, data.password], (err, result) => {
                if (err) {
                    reject(err)
                }
                resolve(result)
            })
    })
}

module.exports = { create, login }