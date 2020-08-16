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

module.exports.addTimbre = (timbre) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await timbreBuilder.addTimbre(timbre);
            resolve(res);
        } catch (err) {
            reject({
                status: 500,
                message: err
            });
        }
    });
};

module.exports.updateTimbre = (timbre) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await timbreBuilder.updateTimbre(timbre);
            resolve(res);
        } catch (err) {
            reject({
                status: 500,
                message: err
            });
        }
    });
};

module.exports.deleteTimbreByNumeroTimbre = (numero_timbre) => {
    return new Promise(async (resolve, reject) => {
        try {
            const timbre = await timbreBuilder.deleteTimbreByNumeroTimbre(numero_timbre);
            resolve(timbre);
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

module.exports.getTimbresListByNumberRange = (start, end) => {
    return new Promise(async (resolve, reject) => {
        try {
            const timbreList = await timbreBuilder.getTimbresListByNumberRange(start, end);
            resolve(timbreList);
        } catch (err) {
            reject({
                status: 500,
                message: err
            });
        }
    });
};

module.exports.getTimbresListByType = (type) => {
    return new Promise(async (resolve, reject) => {
        try {
            const timbreList = await timbreBuilder.getTimbresListByType(type);
            resolve(timbreList);
        } catch (err) {
            reject({
                status: 500,
                message: err
            });
        }
    });
};