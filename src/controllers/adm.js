const Adm = require('../database/models/Adm');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

module.exports = {
    async store(req, res) {
        const { user_name, password } = req.body;
        const encrypt = bcrypt.hashSync(password, salt);
        const user = await Adm.create({
            user_name,
            password: encrypt
        })
        .then(user => user)
        .catch(error => error);

    if (user.id) {
        return res.json({ success: true, message: 'Usuário cadastrado com sucesso' });
    } else {
        if (!Array.isArray(user.errors)) {
            return res.status(400).send({ success: false, message: 'Ocorreu um erro ao cadastrar o usuário' });
        }
        const message = user.errors[0].message;
        return res.status(400).send({ success: false, message });
    }
    },
}