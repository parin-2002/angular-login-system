const pool = require('../config/db')

function create(data) {
    return new Promise(function (resolve, reject) {
        pool.query(`insert into admin(username,email,mobileno,password) values(?,?,?,?)`,
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
        pool.query(`select username,email,password from admin where username=? AND password=?`,
            [data.username, data.password], (err, result) => {
                if (err) {
                    reject(err)
                }
                resolve(result)
            })
    })
}

function selectu() {
    return new Promise(function (resolve, reject) {
        pool.query('select * from user', (err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result)
        })
    })
}

function userd(data) {
    return new Promise(function (resolve, reject) {
        pool.query(`DELETE FROM user where email=?`, [data.email], (err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result)
        })
    })
}

function useru(id, data) {
    return new Promise(function (resolve, reject) {
        pool.query(`UPDATE user SET username=?,email=?,mobileno=?,password=? WHERE id=?`,
            [data.username, data.email, data.mobileno, data.password, id], (err, result) => {
                if (err) {
                    reject(err)
                }
                resolve(result)
            })
    })
}

module.exports = { create, login, selectu, userd, useru }