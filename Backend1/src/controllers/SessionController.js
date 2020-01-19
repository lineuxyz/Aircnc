const User = require('../models/User');

// index, show, store, update, destroy

/*
  index => Listagem de sessões
  show => Listagem de uma unica sessão
  store => Criar uma sessão
  update => Alterar sessão
  destroy => Remover sessões

*/

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
};
