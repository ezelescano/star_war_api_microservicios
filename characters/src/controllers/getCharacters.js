const Character = require('../data');


module.exports = async (req, res) => {
    const characte = await Character.list();
    res.status(200).send(characte);
};