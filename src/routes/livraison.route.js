// Express router
const express = require('express');
const router = express.Router();

// Controller declaration
const LivraisonController = require('../controllers/livraison.controller.js');

/**
 * @swagger
 * /livraisons:
 *   get:
 *     description: Récupère la liste de tous les  moyens de livraison
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: livraisons
 */
router.get('/livraisons', LivraisonController.getLivraisons);

/**
 * @swagger
 * /addLivraison:
 *   post:
 *     description: Ajoute un nouveau moyen de livraison
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: nomLivraison
 *         description: Nom de la livraison
 *         in: formData
 *         required: true
 *         type: string
 *       - name: prixLivraison
 *         description: Prix de la livraison
 *         in: formData
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: La nouvelle livraison a été ajoutée 
 */
router.post('/addLivraison', LivraisonController.addLivraison);

/**
 * @swagger
 *
 * /updateLivraison:
 *   post:
 *     description: Edit un moyen de livraison existant
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: livraisonId
 *         description: Id de la livraison
 *         in: formData
 *         required: true
 *         type: integer
 *       - name: nomLivraison
 *         description: Nom de la livraison
 *         in: formData
 *         required: true
 *         type: string
 *       - name: prixLivraison
 *         description: Prix de la livraison
 *         in: formData
 *         required: true
 *         type: float
 *     responses:
 *       200:
 *         description: La livraison a été éditée
 */
router.post('/updateLivraison', LivraisonController.updateLivraison);

/**
 * @swagger
 * /deleteLivraisonById:
 *   get:
 *     description: Supprime un moyen de livraison par son ID
 *     produces:
 *      - application/json
 *     parameters:
 *       - in: query
 *         name : livraisonId
 *         description: Id de la livraison.
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: livraison
 */
router.get('/deleteLivraisonById', LivraisonController.deleteLivraisonById);

// Export routes
module.exports = router;