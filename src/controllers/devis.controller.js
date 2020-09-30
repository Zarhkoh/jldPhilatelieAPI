const devisService = require('../services/devis.service');


// GESTION DES ERREURS POUR L'ENREGISTREMENT D'UN UTILISATEUR
exports.sendDevis = async (req, res) => {
    try {
        let data = await devisService.sendDevis(req.body.params);
        res.status(data.status).json(data);
        res.end();
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
};