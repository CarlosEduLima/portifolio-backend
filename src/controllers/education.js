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
}