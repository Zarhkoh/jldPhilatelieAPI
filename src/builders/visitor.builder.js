const db = require('../config/db.config');
const moment = require('moment');


module.exports.createNewVisitor = (data) => {
    visitor = {
        "visitorIp": data.visitorIp,
        "visitorLastVisit": new Date(),
        "visitorBrowser": data.visitorBrowser,
        "visitCount": 1
    }
    return new Promise(async (resolve, reject) => {
        try {
            const result = await db.models.Visitor.create(visitor);
            resolve(result);
        } catch (err) {
            console.log(err);
            reject(err);
        }
    });
}

module.exports.addVisit = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await db.models.Visitor.findOne({
                where: {
                    visitorIp: data.visitorIp
                }
            }).then(visitor => {
                if (visitor == null) {
                    console.log('pas trouvé, on crée');
                    this.createNewVisitor(data);
                    this.updateTotalVisits();
                }
                else {
                    console.log('USER TROUVÉ');
                    try {
                        const actualDate = moment().format('yyyy-MM-DD');
                        const lastVisiteDate = moment(visitor.visitorLastVisit).format('yyyy-MM-DD');
                        if (lastVisiteDate !== actualDate) {
                            console.log('updateTotalVisits');
                            this.updateTotalVisits();
                            visitor.update({ visitorLastVisit: new Date() });
                            return visitor.increment('visitCount', { by: 1 });
                        }
                    } catch (error) {
                        console.log(error);
                    }

                }
            });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};

module.exports.updateTotalVisits = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await db.models.Visitor.findOne({
                where: {
                    visitorIp: 'total'
                }
            }).then(option => {
                if (option == null) {
                    visitor = {
                        "visitorIp": 'total',
                    }
                    this.createNewVisitor(visitor);
                }
                else {
                    return option.increment('visitCount', { by: 1 });
                }
            });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};



module.exports.getTotalVisits = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await db.models.Visitor.findOne({
                where: {
                    visitorIp: 'total'
                },
                attributes: [
                    'visitCount']
            });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};