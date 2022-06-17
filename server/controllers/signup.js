const User = require("../models/user")

const signup = async (req, res) => {
    const form = req.body
    const addUser = new User(form)
    const checkUsers = await User.find({ email: form.email })
    
    try {
        if (Object.values(form).includes('')) res.send({
            message: 'Erro: digite em todos os espaços.',
            display: true
        })

        if (form.name.indexOf(' ') >= 0) res.send({
            message: 'Erro: digite apenas o primeiro nome.',
            display: true
        })

        else if (!validateEmail(form.email)) res.send({
            message: 'Erro: e-mail inválido.',
            display: true
        })

        else if (checkUsers.length !== 0) res.send({
            message: 'Erro: e-mail já está em uso.',
            display: true
        })

        else if (form.password.length < 8) res.send({
            message: 'Erro: senha mínimo 8 caracteres.',
            display: true
        })

        else if (form.password.length > 14) res.send({
            message: 'Erro: senha máximo 14 caracteres.',
            display: true
        })

        else if (form.password !== form.confirm) res.send({
            message: 'Erro: senhas incorretas.',
            display: true
        })

        else {
            await addUser.save()
            res.send({
                message: 'Conta criada com sucesso.',
                display: true,
                success: true
            })
        }

    } catch (error) {
        res.status(404)
    }
}

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

module.exports = signup