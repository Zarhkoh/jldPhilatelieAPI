// Express router
const express = require('express');
const router = express.Router();

// Controller declaration
const LogController = require('../controllers/log.controller.js');

router.post('/log', LogController.writeLog);


// Export routes
module.exports = router;