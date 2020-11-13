const livraisonBuilder = require('../builders/livraison.builder');

module.exports.getLivraisons = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const livraisons = await livraisonBuilder.getLivraisons();
            resolve(livraisons);
        } catch (err) {
            reject({
                status: 500,
                message: err
            });
        }
    });
};

module.exports.addLivraison = (livraison) => {
    return new Promise(async(resolve, reject) => {
        try {
            const res = await livraisonBuilder.addLivraison(livraison);
            resolve(res);
        } catch (err) {
            reject({
                status: 500,
                message: err
            });
        }
    });
};

module.exports.updateLivraison = (livraison) => {
    return new Promise(async(resolve, reject) => {
        try {
            livraison.dateEditionLivraison = new Date();
            const res = await livraisonBuilder.updateLivraison(livraison);
            resolve(res);
        } catch (err) {
            reject({
                status: 500,
                message: err
            });
        }
    });
};

module.exports.deleteLivraisonById = (livraisonId) => {
    return new Promise(async(resolve, reject) => {
        try {
            const timbre = await livraisonBuilder.deleteLivraisonById(livraisonId);
            resolve(timbre);
        } catch (err) {
            reject({
                status: 500,
                message: err
            });
        }
    });
};