const visitorService = require('../services/visitor.service');

exports.addVisit = async(req, res) => {
    try {
        let data = await visitorService.addVisit(req.body.params);
        return res.status(200).json(data);
    } catch (err) {
        return res.status(err.status).send(err);
    }
};

exports.getTotalVisits = async(req, res) => {
    try {
        let data = await visitorService.getTotalVisits();
        return res.status(200).json(data);
    } catch (err) {
        return res.status(err.status).send(err);
    }
};