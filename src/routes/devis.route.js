// Express router
const express = require('express');
const router = express.Router();

// Controller declaration
const DevisController = require('../controllers/devis.controller.js');

router.post('/sendDevis', DevisController.sendDevis);

// Export routes
module.exports = router;
