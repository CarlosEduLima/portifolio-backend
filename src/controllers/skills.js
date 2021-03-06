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
    async update(req, res) {
        const { id } = req.params;
        const { ...datas } = req.body;
        const skill = await Skill.findOne({ where: { id } });

        if (!skill) return res.status(404).send({ success: false, message: 'Wasnt found' });
        const updatedskill = await skill.update(datas)
            .then(skill => skill)
            .catch(error => error);

        if (updatedskill.errors) {
            if (!Array.isArray(updatedskill.errors)) {
                return res.status(400).send({ success: false, message: 'Ocorreu um erro' });
            } else {
                const message = updatedskill.errors[0].message;
                return res.status(400).send({ success: false, message });
            }
        }
        res.json({ success: true, message: 'Dados atualizados com sucesso' });
    },
    async delete(req, res) {
        const { id } = req.params;

        if (!id) return res.status(406).send({ success: false, message: 'ID não fornecido' });

        const skill = await Skill.findOne({ where: { id } });

        if (!skill) return res.status(404).send({ success: false, message: 'Não foi encontrado' });

        const deletedSkill = await skill.destroy();

        if (!deletedSkill.length === 0) return res.status(400).send({ success: false, message: 'Ocorreu um erro ao excluir' })

        return res.json({ success: true, message: 'Sucesso' });
    },
}