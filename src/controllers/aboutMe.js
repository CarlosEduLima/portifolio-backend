const AboutMe = require('../database/models/AboutMe');

module.exports = {
    async index(req, res){
        const info = await AboutMe.findAll();
        if(!info)
        return res.status(404).send({ success: false, message: 'Carlos info not found' });

        res.json({success:true, info});
    },
    async store(req, res){
        const { location: url = ""} = req.file;
        const{name, description} = req.body;
        const info = await AboutMe.create({
            name: name,
            description: description,
            profile_url:url
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
}