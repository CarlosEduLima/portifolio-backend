const Contacts = require('../database/models/Contacts');

module.exports = {
    async index(req, res){
        const contacts = await Contacts.findAll({
            where:{
               carlos_id: 1
            }
        });
        if(!contacts)
        return res.status(404).send({ success: false, message: 'Carlos info not found' });

        res.json({success:true, contacts});
    },
    async store(req, res){
        const{id} = req.params;
        const{name} = req.body;
        const contact = await Contacts.create({
            carlos_id: id,
            name: name
        });
        if(contact){
            res.json({success:true, contact});
        }else{
            if (!Array.isArray(contact.errors)) {
                return res.status(400).send({ success: false, message: 'Error' });
            }
            const message = user.errors[0].message;
            return res.status(400).send({ success: false, message });
        }
        
    },  
}