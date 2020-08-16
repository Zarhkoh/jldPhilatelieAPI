// Express router
const express = require('express');
const router = express.Router();

// Controller declaration
const AuthController = require('../controllers/auth.controller.js');

router.post('/login', AuthController.login);

router.post('/register', AuthController.register);

// Export routes
module.exports = router;