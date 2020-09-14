const visitorBuilder = require('../builders/visitor.builder');


module.exports.addVisit = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const timbreList = await visitorBuilder.addVisit(data);
        } catch (err) {
            console.log(err);
            reject({
                status: 500,
                message: err
            });
        }
    });
};

module.exports.getTotalVisits = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const total = await visitorBuilder.getTotalVisits();
            resolve(total);
        } catch (err) {
            reject({
                status: 500,
                message: err
            });
        }
    });
};