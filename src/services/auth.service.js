const userBuilder = require('../builders/user.builder');
const CONFIG = require('../config/config');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


// PARTIE METIER DE LA CONNEXION AVEC UN UTILISATEUR
// ON COMPARE LES MOTS DE PASSE
// UN TOKEN EST CREE
module.exports.login = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {
                email,
                pwd
            } = body;
            // vérifie que l'email est déjà présent en BDD
            if (email.length !== 0 && pwd.length !== 0) {
                // on récupère les identifiants
                const auth = await userBuilder.findUser(email);

                if (auth === null) {
                    return resolve({
                        status: 403
                    });
                }

                // check compare password
                const match = await bcryptjs.compare(pwd, auth.pwd);
                if (match === true) {
                    // Génération du token
                    const newToken = jwt.sign({
                        email
                    }, CONFIG.token_status, {
                        expiresIn: CONFIG.token_expire
                    });

                    return resolve({
                        status: 200,
                        token: newToken
                    });

                } else {
                    return resolve({
                        status: 403
                    });
                }
            } else {
                return resolve({
                    status: 400
                });
            }
        } catch (err) {
            reject({
                status: 500,
                message: err.message
            });
        };
    });
};


// PARTIE METIER DE L'ENREGISTREMENT D'UN UTILISATEUR
// VERIFICATION QUE L'EMAIL N'EST PAS DEJA UTILISE
// LE MOT DE PASSE EST CRYPTE A LA CREATION DU COMPTE
module.exports.register = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {
                prenom,
                email,
                pwd
            } = body;

            // Verifie si l'email est déjà utilisé
            const user = await userBuilder.findUser(email);

            if (user !== null && user.email === email) {
                return resolve({
                    status: 403,
                    text: 'Email déjà utilisé'
                });
            }

            // On s'assure qu'aucune entrée ne soit vide
            console.log("BODY ", body, "PRENOM: ", prenom);
            if (pwd.length === 0 || email.length === 0 || prenom.length == 0) {
                return resolve({
                    status: 400
                });
            }

            const salt = bcryptjs.genSaltSync(CONFIG.saltTurns);
            const hashpwd = bcryptjs.hashSync(pwd, salt);

            let createUser = userBuilder.createUser(prenom, email, hashpwd);

            resolve(createUser);

        } catch (err) {
            reject({
                status: 500,
                message: err.message
            });
        }
    });
};


module.exports.findUserByEmail = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {
                email
            } = body;

            const userByEmail = await userBuilder.findUser(email);

            resolve(userByEmail);
        } catch (err) {
            reject({
                status: 500,
                message: err.message
            });
        }
    });
};