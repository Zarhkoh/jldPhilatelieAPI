const timbreBuilder = require('../builders/timbre.builder');

module.exports.getTimbres = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const timbres = await timbreBuilder.findTimbre();
            resolve(timbres);
        } catch (err) {
            reject({
                status: 500,
                message: err
            });
        }
    });
};

module.exports.getTimbreByNumeroTimbre = (numero_timbre) => {
    return new Promise(async (resolve, reject) => {
        try {
            const timbre = await timbreBuilder.findTimbreByNumeroTimbre(numero_timbre);
            resolve(timbre);
        } catch (err) {
            reject({
                status: 500,
                message: err
            });
        }
    });
};