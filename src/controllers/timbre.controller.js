const timbreService = require('../services/timbre.service');

exports.getTimbres = async (req, res) => {
    try {
        let data = await timbreService.getTimbres();
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return res.status(err.status).send(err);
    }
};

exports.getTimbreByNumeroTimbre = async (req, res) => {
    try {
        let data = await timbreService.getTimbreByNumeroTimbre(req.query.numero_timbre);
        return res.status(200).json(data);
    } catch (err) {
        return res.status(err.status).send(err);
    }
};