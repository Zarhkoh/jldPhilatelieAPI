const db = require('../config/db.config');

//Find all livraisons
module.exports.getLivraisons = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const result = await db.models.Livraison.findAll();
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};

module.exports.addLivraison = (data) => {
    livraison = {
        "nomLivraison": data.label,
        "prixLivraison": data.prix,
        "dateEditionLivraison": new Date()
    }
    return new Promise(async(resolve, reject) => {
        try {
            const result = await db.models.Livraison.create(livraison);
            resolve(result);
        } catch (err) {
            console.log(err);
            reject(err);
        }
    });
}

module.exports.updateLivraison = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            const result = await db.models.Livraison.update(data, {
                where: {
                    livraisonId: data.livraisonId
                }
            });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
}

module.exports.deleteLivraisonById = (id) => {
    return new Promise(async(resolve, reject) => {
        try {
            const result = await db.models.Livraison.destroy({
                where: {
                    livraisonId: id
                }
            });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};