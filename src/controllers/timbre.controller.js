const timbreService = require('../services/timbre.service');

exports.getTimbres = async(req, res) => {
    try {
        let data = await timbreService.getTimbres();
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return res.status(err.status).send(err);
    }
};

exports.getTimbresQty = async(req, res) => {
    try {
        let data = await timbreService.getTimbresQty();
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return res.status(err.status).send(err);
    }
};

exports.deleteTimbreById = async(req, res) => {
    try {
        let data = await timbreService.deleteTimbreById(req.query.timbreId);
        return res.status(200).json(data);
    } catch (err) {
        return res.status(err.status).send(err);
    }
};

exports.getTimbreByNumeroTimbre = async(req, res) => {
    try {
        let data = await timbreService.getTimbreByNumeroTimbre(req.query.numero_timbre);
        return res.status(200).json(data);
    } catch (err) {
        return res.status(err.status).send(err);
    }
};

exports.getTimbreByIdTimbre = async(req, res) => {
    try {
        let data = await timbreService.getTimbreByIdTimbre(req.query.id_timbre);
        return res.status(200).json(data);
    } catch (err) {
        return res.status(err.status).send(err);
    }
};

exports.incrementTimbreQuantity = async(req, res) => {
    try {
        let data = await timbreService.incrementTimbreQuantity(req.query.id_timbre, req.query.quantity);
        return res.status(200).json(data);
    } catch (err) {
        return res.status(err.status).send(err);
    }
};
exports.decrementTimbreQuantity = async(req, res) => {
    try {
        let data = await timbreService.decrementTimbreQuantity(req.query.id_timbre, req.query.quantity);
        return res.status(200).json(data);
    } catch (err) {
        return res.status(err.status).send(err);
    }
};


exports.addTimbre = async(req, res) => {
    try {
        let data = await timbreService.addTimbre(req.body.params.newTimbre);
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return res.status(err.status).send(err);
    }
};

exports.updateTimbre = async(req, res) => {
    try {
        let data = await timbreService.updateTimbre(req.body.params.newTimbre);
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return res.status(err.status).send(err);
    }
};

exports.getTimbresListByNumberRange = async(req, res) => {
    try {
        let data = await timbreService.getTimbresListByNumberRange(req.query.start, req.query.end, req.query.condition);
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return res.status(err.status).send(err);
    }
};

exports.getTimbresListByCat = async(req, res) => {
    try {
        console.log(req.query.categorie, req.query.condition);
        let data = await timbreService.getTimbresListByCat(req.query.categorie, req.query.condition);
        return res.status(200).json(data);
    } catch (err) {
        return res.status(err.status).send(err);
    }
};