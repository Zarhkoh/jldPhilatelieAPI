const db = require('../config/db.config');
const { Op } = require("sequelize");

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
module.exports.addTimbre = (data) => {
    timbre = {
        "numeroTimbre": data.numero,
        "imageTimbreUrl": data.image,
        "prixTimbre": data.prix,
        "quantiteTimbre": data.quantite,
        "catTimbre": data.categorie,
        "etatTimbre": data.etat,
        "anneeCoinDate": data.anneeCoinDate,
        "optionalInfos": data.optionalInfos,
        "tasType": data.tasType
    }
    return new Promise(async (resolve, reject) => {
        try {
            const result = await db.models.Timbre.create(timbre);
            resolve(result);
        } catch (err) {
            console.log(err);
            reject(err);
        }
    });
}

module.exports.updateTimbre = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await db.models.Timbre.update(data,
                {
                    where: {
                        timbreId: data.timbreId
                    }
                });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
}

module.exports.deleteTimbreByNumeroTimbre = (numero_timbre) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await db.models.Timbre.destroy({
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

module.exports.getTimbresListByNumberRange = (start, end) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await db.models.Timbre.findAll({
                where: {
                    numeroTimbre: { [Op.between]: [start, end] },
                    catTimbre: ['classic']
                }
            });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};

module.exports.getTimbresListByCat = (categorie) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await db.models.Timbre.findAll({
                where: {
                    catTimbre: categorie
                }
            });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};