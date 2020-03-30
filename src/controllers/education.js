const Education = require('../database/models/Education');

module.exports = {
    async index(req, res) {
        const education = await Education.findAll({
            where: {
                carlos_id: 1
            }
        });
        if (!education)
            return res.status(404).send({ success: false, message: 'Carlos info not found' });

        res.json({ success: true, education });
    },
    async store(req, res) {
        const { id } = req.params;
        const { institution_name, course, start, end } = req.body;
        const education = await Education.create({
            carlos_id: id,
            institution_name: institution_name,
            course: course,
            start: start,
            end: end
        });
        if (education) {
            res.json({ success: true, education });
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
        const education = await Education.findOne({ where: { id } });

        if (!education) return res.status(404).send({ success: false, message: 'Wasnt found' });
        const updatedEducation = await education.update(datas)
            .then(education => education)
            .catch(error => error);

        if (updatedEducation.errors) {
            if (!Array.isArray(updatedEducation.errors)) {
                return res.status(400).send({ success: false, message: 'Ocorreu um erro' });
            } else {
                const message = updatedEducation.errors[0].message;
                return res.status(400).send({ success: false, message });
            }
        }
        res.json({ success: true, message: 'Dados atualizados com sucesso' });
    },
    async delete(req, res) {
        const { id } = req.params;

        if (!id) return res.status(406).send({ success: false, message: 'ID não fornecido' });

        const education = await Education.findOne({ where: { id } });

        if (!education) return res.status(404).send({ success: false, message: 'Não foi encontrado' });

        const deletedEducation = await education.destroy();

        if (!deletedEducation.length === 0) return res.status(400).send({ success: false, message: 'Ocorreu um erro ao excluir' })

        return res.json({ success: true, message: 'Sucesso' });
    },
}