const db = require('../config/db.config');

//Find all timbres
module.exports.findTimbre = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await db.models.Timbre.findAll();
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};

module.exports.findTimbreByNumeroTimbre = (numero_timbre) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await db.models.Timbre.findOne({
                where: {
                    numeroTimbre: numero_timbre
                }
            });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};