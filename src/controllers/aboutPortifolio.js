const AboutPortifolio = require('../database/models/AboutPortifolio');

module.exports = {
    async index(req, res){
        const info = await AboutPortifolio.findAll({
            where:{
                id: 1
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
}