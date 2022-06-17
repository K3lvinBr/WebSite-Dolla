const User = require("../models/user")

const signin = async (req, res) => {
    const form = req.body
    const checkUsers = await User.find({ email: form.email, password: form.password })
    try {
        if (checkUsers.length === 0) res.send({
            message: 'Essa conta não existe.',
            display: true
        })
        else res.send({
            name: checkUsers[0].name
        })
    }
    catch (error) {
        res.status(404)
    }
}

module.exports = signin