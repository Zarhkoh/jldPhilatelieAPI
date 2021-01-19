const db = require('../config/db.config');
const { Op } = require("sequelize");

//Find all timbres
module.exports.findTimbre = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const result = await db.models.Timbre.findAll();
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};

//Find how much stamps we have in bdd
module.exports.findTimbreQty = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const result = await db.models.Timbre.count();
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
    return new Promise(async(resolve, reject) => {
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
    return new Promise(async(resolve, reject) => {
        try {
            const result = await db.models.Timbre.update(data, {
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


module.exports.deleteTimbreById = (id) => {
    return new Promise(async(resolve, reject) => {
        try {
            const result = await db.models.Timbre.destroy({
                where: {
                    timbreId: id
                }
            });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};

module.exports.getTimbresListByNumberRange = (start, end, condition) => {
    return new Promise(async(resolve, reject) => {
        try {
            if (condition == "neuf") {
                const result = await db.models.Timbre.findAll({
                    where: {
                        numeroTimbre: {
                            [Op.between]: [start, end]
                        },
                        catTimbre: ['classic'],
                        etatTimbre: ['neuf', 'occas', 'sg']
                    }
                });
                resolve(result);
            } else if (condition == "obl") {
                const result = await db.models.Timbre.findAll({
                    where: {
                        numeroTimbre: {
                            [Op.between]: [start, end]
                        },
                        catTimbre: ['classic'],
                        etatTimbre: ['obl']
                    }
                });
                resolve(result);
            }
        } catch (err) {
            reject(err);
        }
    });
};
module.exports.findTimbreByNumeroTimbre = (numero) => {
    return new Promise(async(resolve, reject) => {
        try {
            const result = await db.models.Timbre.findAll({
                where: {
                    numeroTimbre: numero
                }
            });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};

module.exports.findTimbreByIdTimbre = (id) => {
    return new Promise(async(resolve, reject) => {
        try {
            const result = await db.models.Timbre.findOne({
                where: {
                    timbreId: id
                }
            });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};

module.exports.incrementTimbreQuantity = (id, qte) => {
    return new Promise(async(resolve, reject) => {
        try {
            const result = await db.models.Timbre.findOne({
                where: {
                    timbreId: id
                }
            }).then(option => {
                return option.increment('quantiteTimbre', { by: qte });
            });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};

module.exports.decrementTimbreQuantity = (id, qte) => {
    return new Promise(async(resolve, reject) => {
        try {
            const result = await db.models.Timbre.findOne({
                where: {
                    timbreId: id
                }
            }).then(option => {
                return option.decrement('quantiteTimbre', { by: qte });
            });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};

module.exports.getTimbresListByCat = (categorie, condition) => {
    return new Promise(async(resolve, reject) => {
        try {
            if (condition == 'neuf') {
                const result = await db.models.Timbre.findAll({
                    where: {
                        catTimbre: categorie,
                        etatTimbre: ['neuf', 'occas', 'sg']
                    }
                });
                resolve(result);
            } else if (condition == 'obl') {
                const result = await db.models.Timbre.findAll({
                    where: {
                        catTimbre: categorie,
                        etatTimbre: ['obl']
                    }
                });
                resolve(result);
            }

        } catch (err) {
            reject(err);
        }
    });
};