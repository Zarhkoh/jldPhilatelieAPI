// Express router
const express = require('express');
const router = express.Router();

// Controller declaration
const AuthController = require('../controllers/auth.controller.js');

/**
 * @swagger
 *
 * /login:
 *   post:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: Email to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: pwd
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login has been established successfully
 */
router.post('/login', AuthController.login);

/**
 * @swagger
 *
 * /register:
 *   post:
 *     description: Register to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: prenom
 *         description: Votre prénom
 *         in: formData
 *         required: true
 *         type: string
 *       - name: email
 *         description: Email à utiliser pour le login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: pwd
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: register has been created successfully
 */
router.post('/register', AuthController.register);


// router.get('/tokenvalidation', AuthController.);

// Export routes
module.exports = router;