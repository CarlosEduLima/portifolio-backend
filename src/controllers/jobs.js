const Job = require('../database/models/Jobs');

module.exports = {
    async index(req, res) {
        const job = await Job.findAll({
            where: {
                carlos_id: 1
            }
        });
        if (!job)
            return res.status(404).send({ success: false, message: 'Carlos info not found' });

        res.json({ success: true, job });
    },
    async store(req, res) {
        const { id } = req.params;
        const { company, department, role, start, end } = req.body;
        const job = await Job.create({
            carlos_id: id,
            company: company,
            department: department,
            role: role,
            start: start,
            end: end
        });
        if (job) {
            res.json({ success: true, job });
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
        const job = await Job.findOne({ where: { id } });

        if (!job) return res.status(404).send({ success: false, message: 'Wasnt found' });
        const updatedjob = await job.update(datas)
            .then(job => job)
            .catch(error => error);

        if (updatedjob.errors) {
            if (!Array.isArray(updatedjob.errors)) {
                return res.status(400).send({ success: false, message: 'Ocorreu um erro' });
            } else {
                const message = updatedjob.errors[0].message;
                return res.status(400).send({ success: false, message });
            }
        }
        res.json({ success: true, message: 'Dados atualizados com sucesso' });
    },
   
}