// Express router
const express = require('express');
const router = express.Router();

// Controller declaration
const VisitorController = require('../controllers/visitor.controller.js');

router.post('/newVisit', VisitorController.addVisit);

router.get('/totalVisits', VisitorController.getTotalVisits);

// Export routes
module.exports = router;