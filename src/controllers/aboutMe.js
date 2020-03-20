const Carlos = require('../database/models/Carlos');


module.exports = {
    async index(req, res){
        const info = await Carlos.findAll();
        if(!info)
        return res.status(404).send({ success: false, message: 'Carlos info not found' });

        res.json({success:true, info});
    },
    async store(req, res){
        const { location: url = ""} = req.file;
        const{address, about_me} = req.body;
        const info = await Carlos.create({
            address:address,
            about_me:about_me,
            img_url:url
        });
        if(info){
            res.json({success:true, info});
        }else{
            if (!Array.isArray(info.errors)) {
                return res.status(400).send({ success: false, message: 'Error' });
            }
            const message = user.errors[0].message;
            return res.status(400).send({ success: false, message });
        }
        
    },  
    async update(req, res) {
        const { id } = req.params;
        const { ...datas } = req.body;
        const me = await Carlos.findOne({ where: { id } });

        if (!me) return res.status(404).send({ success: false, message: 'Me wasnt found' });

        const updatedInfo = await me.update(datas)
            .then(me => me)
            .catch(error => error);

        if (updatedInfo.errors) {
            if (!Array.isArray(updatedInfo.errors)) {
                return res.status(400).send({ success: false, message: 'Ocorreu um erro' });
            } else {
                const message = updatedInfo.errors[0].message;
                return res.status(400).send({ success: false, message });
            }
        }
        res.json({ success: true, message: 'Dados atualizados com sucesso' });
    },
}