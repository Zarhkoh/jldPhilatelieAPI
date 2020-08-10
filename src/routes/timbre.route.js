// Express router
const express = require('express');
const router = express.Router();

// Controller declaration
const TimbreController = require('../controllers/timbre.controller.js');

/**
 * @swagger
 * /timbres:
 *   get:
 *     description: Récupère la liste de tous les timbres
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: timbres
 */
router.get('/timbres', TimbreController.getTimbres);

/**
 * @swagger
 * /timbreByNumeroTimbre:
 *   get:
 *     description: Récupère un timbre par son numéro
 *     produces:
 *      - application/json
 *     parameters:
 *       - in: query
 *         name : numero_timbre
 *         description: Récupère un timbre par son numéro.
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: timbre
 */
router.get('/timbreByNumeroTimbre', TimbreController.getTimbreByNumeroTimbre);

// Export routes
module.exports = router;