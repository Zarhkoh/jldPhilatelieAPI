const db = require('../config/db.config');
const { Op } = require("sequelize");

module.exports.addDevis = (data) => {
    console.log('BUILDER REACHED');
    valeur = 0;
    data.timbres.forEach(timbre => {
        valeur += Number(timbre.prixTimbre);
    });
    valeur += Number(data.envoi.prix);
    devis = {
        "email": data.email,
        "date": new Date(),
        "timbres": data.timbres,
        "envoi": data.envoi.nomLivraison,
        "quantiteTimbres": data.timbres.length,
        "valeur": valeur,
        "optionalMessage": data.optionalMessage
    }
    return new Promise(async(resolve, reject) => {
        try {
            const result = await db.models.Devis.create(devis);
            resolve(result);
        } catch (err) {
            console.log(err);
            reject(err);
        }
    });
}