const AboutPortifolio = require('../database/models/AboutPortifolio');

module.exports = {
    async index(req, res){
        const {id} = req.params;
        const info = await AboutPortifolio.findAll({
            where:{
                id: id
            }
        });
        if(!info)
        return res.status(404).send({ success: false, message: 'Carlos info not found' });

        res.json({success:true, info});
    },
    async store(req, res){
        const{description} = req.body;
        const about = await AboutPortifolio.create({
            description:description
        });
        if(about){
            res.json({success:true, about});
        }else{
            if (!Array.isArray(about.errors)) {
                return res.status(400).send({ success: false, message: 'Error' });
            }
            const message = user.errors[0].message;
            return res.status(400).send({ success: false, message });
        }
        
    },
    async update(req, res) {
        const { id } = req.params;
        const { ...datas } = req.body;
        const about_portifolio = await AboutPortifolio.findOne({ where: { id } });

        if (!about_portifolio) return res.status(404).send({ success: false, message: 'Wasnt found' });
        const updatedAboutPortifolio = await about_portifolio.update(datas)
            .then(about_portifolio => about_portifolio)
            .catch(error => error);

        if (updatedAboutPortifolio.errors) {
            if (!Array.isArray(updatedAboutPortifolio.errors)) {
                return res.status(400).send({ success: false, message: 'Ocorreu um erro' });
            } else {
                const message = updatedAboutPortifolio.errors[0].message;
                return res.status(400).send({ success: false, message });
            }
        }
        res.json({ success: true, message: 'Dados atualizados com sucesso' })
    },  
}