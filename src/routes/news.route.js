// Express router
const express = require('express');
const router = express.Router();

// Controller declaration
const NewsController = require('../controllers/news.controller.js');

/**
 * @swagger
 * /getNews:
 *   get:
 *     description: Récupère le dernier texte dans 'nouveautés'
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Texte 'Nouveautés' de l'accueil
 */
router.get('/getNews', NewsController.getNews);

/**
 * @swagger
 * /editNews:
 *   post:
 *     description: Ajoute un nouveau texte nouveautés
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: texte
 *         description: Nom de la livraison
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: La nouvelle news a été ajoutée
 */
router.post('/editNews', NewsController.editNews);


// Export routes
module.exports = router;