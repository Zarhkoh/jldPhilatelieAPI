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
        "typeTimbre": data.type,
        "anneeCoinDate": data.anneeCoinDate,
        "optionalInfos": data.optionalInfos
    }
    console.log("TIMBRE AVANT AJOUT:", timbre);
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
    console.log("TIMBRE AVANT AJOUT:", data);
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

module.exports.getTimbresListByNumberRange = (start, end) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await db.models.Timbre.findAll({
                where: {
                    numeroTimbre: { [Op.between]: [start, end] },
                    typeTimbre: 'neuf'
                }
            });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};

module.exports.getTimbresListByType = (type) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await db.models.Timbre.findAll({
                where: {
                    typeTimbre: type
                }
            });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};