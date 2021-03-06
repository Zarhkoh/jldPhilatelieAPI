const timbreBuilder = require('../builders/timbre.builder');

module.exports.getTimbres = () => {
    return new Promise(async(resolve, reject) => {
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

module.exports.getTimbresQty = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const res = await timbreBuilder.findTimbreQty();
            resolve(res);
        } catch (err) {
            reject({
                status: 500,
                message: err
            });
        }
    });
};

module.exports.addTimbre = (timbre) => {
    return new Promise(async(resolve, reject) => {
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
    return new Promise(async(resolve, reject) => {
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

module.exports.deleteTimbreById = (timbreId) => {
    return new Promise(async(resolve, reject) => {
        try {
            const timbre = await timbreBuilder.deleteTimbreById(timbreId);
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
    return new Promise(async(resolve, reject) => {
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

module.exports.getTimbreByIdTimbre = (id_timbre) => {
    return new Promise(async(resolve, reject) => {
        try {
            const timbre = await timbreBuilder.findTimbreByIdTimbre(id_timbre);
            resolve(timbre);
        } catch (err) {
            reject({
                status: 500,
                message: err
            });
        }
    });
};

module.exports.incrementTimbreQuantity = (id_timbre, qty) => {
    return new Promise(async(resolve, reject) => {
        try {
            const timbre = await timbreBuilder.incrementTimbreQuantity(id_timbre, qty);
            resolve(timbre);
        } catch (err) {
            reject({
                status: 500,
                message: err
            });
        }
    });
};

module.exports.decrementTimbreQuantity = (id_timbre, qty) => {
    return new Promise(async(resolve, reject) => {
        try {
            const timbre = await timbreBuilder.decrementTimbreQuantity(id_timbre, qty);
            resolve(timbre);
        } catch (err) {
            reject({
                status: 500,
                message: err
            });
        }
    });
};

module.exports.getTimbresListByNumberRange = (start, end, condition) => {
    return new Promise(async(resolve, reject) => {
        try {
            const timbreList = await timbreBuilder.getTimbresListByNumberRange(start, end, condition);
            resolve(timbreList);
        } catch (err) {
            reject({
                status: 500,
                message: err
            });
        }
    });
};

module.exports.getTimbresListByCat = (categorie, condition) => {
    return new Promise(async(resolve, reject) => {
        try {
            const timbreList = await timbreBuilder.getTimbresListByCat(categorie, condition);
            resolve(timbreList);
        } catch (err) {
            reject({
                status: 500,
                message: err
            });
        }
    });
};