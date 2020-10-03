const jat = require("jsonwebtoken")

function tokenVerify(req, res, next) {
    let token = req.get("authorization")
    if (token) {
        token = token.slice(7);
        jat.verify(token, "qwe1234", (err, decoded) => {
            if (err) {
                return res.json({ success: 0, message: "invalid token" })
            }
            else {
                req.decoded = decoded
                next()
            }
        })
    }
    else {
        return res.json({ success: 0, message: "access denied! unauthorized user" })
    }
}

module.exports = tokenVerify;