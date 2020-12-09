const logService = require('../services/log.service');

exports.writeLog = (req, res) => {
    try {
        logService.writeLog(req.body.params.log);
        return res.status(200).json("ok");
    } catch (err) {
        console.log(err);
        return res.status(err.status).send(err);
    }
};