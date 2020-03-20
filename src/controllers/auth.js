const Adm = require('../database/models/Adm');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');
const bcrypt = require('bcrypt');

module.exports = {
    async authenticate(req, res) {
        const { user_name, pass } = req.body;
        const user = await Adm.findOne({ where: { user_name } });
        if (!user)
            return res.status(404).send({ success: false, message: 'Error' });

        if (!await bcrypt.compare(pass, user.password))
            return res.status(400).send({ success: false, message: 'Senha incorreta' })

        const token = jwt.sign({ id: user.id }, authConfig.secret, {
            expiresIn: 86400
        });
        const { password, ...userDatas } = user.dataValues;

        res.json({ success: true, token, user: userDatas })
    },
}