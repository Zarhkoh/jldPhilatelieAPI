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
exports.deleteTimbreByNumeroTimbre = async (req, res) => {
    try {
        let data = await timbreService.deleteTimbreByNumeroTimbre(req.query.numero_timbre);
        return res.status(200).json(data);
    } catch (err) {
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

exports.addTimbre = async (req, res) => {
    try {
        let data = await timbreService.addTimbre(req.body.params.newTimbre);
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return res.status(err.status).send(err);
    }
};

exports.updateTimbre = async (req, res) => {
    try {
        let data = await timbreService.updateTimbre(req.body.params.newTimbre);
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return res.status(err.status).send(err);
    }
};

exports.getTimbresListByNumberRange = async (req, res) => {
    try {
        let data = await timbreService.getTimbresListByNumberRange(req.query.start, req.query.end);
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return res.status(err.status).send(err);
    }
};

exports.getTimbresListByCat = async (req, res) => {
    try {
        let data = await timbreService.getTimbresListByCat(req.query.categorie);
        return res.status(200).json(data);
    } catch (err) {
        return res.status(err.status).send(err);
    }
};