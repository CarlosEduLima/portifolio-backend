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
    async update(req, res) {
        const { id } = req.params;
        const { ...datas } = req.body;
        const contact = await Contacts.findOne({ where: { id } });

        if (!contact) return res.status(404).send({ success: false, message: 'Wasnt found' });
        const updatedcontact = await contact.update(datas)
            .then(contact => contact)
            .catch(error => error);

        if (updatedcontact.errors) {
            if (!Array.isArray(updatedcontact.errors)) {
                return res.status(400).send({ success: false, message: 'Ocorreu um erro' });
            } else {
                const message = updatedcontact.errors[0].message;
                return res.status(400).send({ success: false, message });
            }
        }
        res.json({ success: true, message: 'Dados atualizados com sucesso' });
    },  
    async delete(req, res) {
        const { id } = req.params;

        if (!id) return res.status(406).send({ success: false, message: 'ID do contato não fornecido' });

        const Contact = await Contacts.findOne({ where: { id } });

        if (!contact) return res.status(404).send({ success: false, message: 'Contato não foi encontrado' });

        const  deletedContact = await Contact.destroy();

        if (!deletedContact.length === 0) return res.status(400).send({ success: false, message: 'Ocorreu um erro ao excluir o contato' })

        return res.json({ success: true, message: 'Usuário excluído com sucesso' });
    },
}