//index, show, store, update, destroy
// index = listagem de sessoes; show = listar uma unica sessao; store = cria sessao; update editar sessao; destroy = deletar sessao 
const User = require('../models/User');

module.exports = {
    async store(req, res){
        const { email } = req.body;
        let user = await User.findOne({ email: email });
        if (!user){
            user = await User.create({ email });
        }
        return res.json(user);
    }
};