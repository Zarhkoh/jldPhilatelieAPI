const authService = require('../services/auth.service');

// GESTION DES ERREURS POUR LA CONNEXION D'UN UTILISATEUR
exports.login = async (req, res) => {
    try {
        let data = await authService.login(req.body);
        if (data.status === 403) {
            res.status(data.status).json({
                erreur: 'Authentification échouée'
            });
            res.end();
        } else if (data.status === 400) {
            res.status(data.status).json({
                erreur: 'Tous les champs sont obligatoires'
            });
            res.end();
        } else {
            res.status(200).json({
                message: 'Vous êtes maintenant connecté',
                token: data.token
            });
            res.end();
        }
    } catch (err) {
        return res.status(err).send(err.message);
    }
};

// GESTION DES ERREURS POUR L'ENREGISTREMENT D'UN UTILISATEUR
exports.register = async (req, res) => {
    try {
        let data = await authService.register(req.body);

        if (data.status === 403) {
            res.status(403).json({
                erreur: data.text
            });
            res.end();
        } else if (data.status === 400) {
            res.status(400).json({
                erreur: 'Tous les champs sont obligatoires'
            });
            res.end();
        } else {
            res.status(200).json(data);
            res.end();
        }
    } catch (err) {
        return res.status(400).send(err.message);
    }
};

exports.findUserByEmail = async (req, res) => {
    try {
        let data = await authService.findUserByEmail(req.body);
        res.status(200).json(data);
    } catch (err) {
        return res.status(err).send(err.message);
    }
};