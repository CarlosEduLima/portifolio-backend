const Skill = require('../database/models/Skills');

module.exports = {
    async index(req, res) {
        const skill = await Skill.findAll({
            where: {
                carlos_id: 1
            }
        });
        if (!skill)
            return res.status(404).send({ success: false, message: 'Carlos info not found' });

        res.json({ success: true, skill });
    },
    async store(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        const skill = await Skill.create({
            carlos_id: id,
            name: name
            
        });
        if (skill) {
            res.json({ success: true, skill });
        } else {
            if (!Array.isArray(contact.errors)) {
                return res.status(400).send({ success: false, message: 'Error' });
            }
            const message = user.errors[0].message;
            return res.status(400).send({ success: false, message });
        }

    },
}