const db = require('../config/db.config');
const moment = require('moment');


module.exports.createNewVisitor = (data) => {
    visitor = {
        "visitorIp": data.visitorIp,
        "visitorLastVisit": new Date(),
        "visitorBrowser": data.visitorBrowser,
        "visitCount": 1
    }
    return new Promise(async(resolve, reject) => {
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
    return new Promise(async(resolve, reject) => {
        try {
            const result = await db.models.Visitor.findOne({
                where: {
                    visitorIp: data.visitorIp
                }
            }).then(visitor => {
                if (visitor == null) {
                    this.createNewVisitor(data);
                    this.updateTotalVisits();
                } else {
                    try {
                        let updateCount = false;
                        const actualDate = moment().format('yyyy-MM-DD');
                        const lastVisiteDate = moment(visitor.visitorLastVisit).format('yyyy-MM-DD');
                        if (lastVisiteDate !== actualDate || visitor.visitorIp == "0.0.0.0" && ((new Date().getTime() - new Date(visitor.visitorLastVisit).getTime()) / 60000) > 5) {
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
    return new Promise(async(resolve, reject) => {
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
                } else {
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
    return new Promise(async(resolve, reject) => {
        try {
            const result = await db.models.Visitor.findOne({
                where: {
                    visitorIp: 'total'
                },
                attributes: [
                    'visitCount'
                ]
            });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};