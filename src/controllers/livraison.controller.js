const livraisonService = require('../services/livraison.service');

exports.getLivraisons = async(req, res) => {
    try {
        let data = await livraisonService.getLivraisons();
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return res.status(err.status).send(err);
    }
};

exports.deleteLivraisonById = async(req, res) => {
    try {
        let data = await livraisonService.deleteLivraisonById(req.query.livraisonId);
        return res.status(200).json(data);
    } catch (err) {
        return res.status(err.status).send(err);
    }
};

exports.addLivraison = async(req, res) => {
    try {
        let data = await livraisonService.addLivraison(req.body.params.newLivraison);
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return res.status(err.status).send(err);
    }
};

exports.updateLivraison = async(req, res) => {
    try {
        let data = await livraisonService.updateLivraison(req.body.params.newLivraison);
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return res.status(err.status).send(err);
    }
};