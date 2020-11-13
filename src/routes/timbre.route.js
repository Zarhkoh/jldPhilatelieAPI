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
 * /timbresByType:
 *   get:
 *     description: Récupère une liste de timbres par le type
 *     produces:
 *      - application/json
 *     parameters:
 *       - in: query
 *         name : type
 *         description: Type de timbre
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: timbre
 */
router.get('/timbresByCat', TimbreController.getTimbresListByCat);

/**
 * @swagger
 * /timbresByRange:
 *   get:
 *     description: Récupère une liste de timbres par un numéro de début et de fin
 *     produces:
 *      - application/json
 *     parameters:
 *       - in: query
 *         name : start
 *         description: Numéro de début de séquence
 *         required: true
 *         type: integer
 *       - in: query
 *         name : end
 *         description: Numéro de fin de séquence
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: timbre
 */
router.get('/timbresByRange', TimbreController.getTimbresListByNumberRange);

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

/**
 * @swagger
 * /timbreByIdTimbre:
 *   get:
 *     description: Récupère un timbre par son ID
 *     produces:
 *      - application/json
 *     parameters:
 *       - in: query
 *         name : id_timbre
 *         description: Récupère un timbre par son ID.
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: timbre
 */
router.get('/timbreByIdTimbre', TimbreController.getTimbreByIdTimbre);

/**
 * @swagger
 * /incrementTimbreQuantity:
 *   get:
 *     description: Incremente(+) la quantité disponible pour le timbre
 *     produces:
 *      - application/json
 *     parameters:
 *       - in: query
 *         name : id_timbre
 *         description: Id du timbre.
 *         required: true
 *         type: string
 *       - in: query
 *         name : quantity
 *         description: Quantité
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: timbre
 */
router.get('/incrementTimbreQuantity', TimbreController.incrementTimbreQuantity);


/**
 * @swagger
 * /decrementTimbreQuantity:
 *   get:
 *     description: Décrémente(-) la quantité disponible pour le timbre
 *     produces:
 *      - application/json
 *     parameters:
 *       - in: query
 *         name : id_timbre
 *         description: Id du timbre.
 *         required: true
 *         type: string
 *       - in: query
 *         name : quantity
 *         description: Quantité
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: timbre
 */
router.get('/decrementTimbreQuantity', TimbreController.decrementTimbreQuantity);

/**
 * @swagger
 * /deleteTimbreById:
 *   get:
 *     description: Supprime un timbre par son numéro
 *     produces:
 *      - application/json
 *     parameters:
 *       - in: query
 *         name : numero_timbre
 *         description: Supprime un timbre par son numéro.
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: timbre
 */
router.get('/deleteTimbreById', TimbreController.deleteTimbreById);


/**
 * @swagger
 *
 * /addTimbre:
 *   post:
 *     description: Ajoute un nouveau timbre
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: numeroTimbre
 *         description: Numéro du timbre
 *         in: formData
 *         required: true
 *         type: integer
 *       - name: prixTimbre
 *         description: Prix du timbre
 *         in: formData
 *         required: true
 *         type: number
 *       - name: imageTimbreUrl
 *         description: Url de l'image du timbre
 *         in: formData
 *         required: true
 *         type: string 
 *       - name: type
 *         description: le timbre est il étoile?
 *         in: formData
 *         required: true
 *         type: boolean
 *     responses:
 *       200:
 *         description: register has been created successfully
 */
router.post('/addTimbre', TimbreController.addTimbre);

/**
 * @swagger
 *
 * /updateTimbre:
 *   post:
 *     description: Edit un timbre existant
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: timbreId
 *         description: Id du timbre
 *         in: formData
 *         required: true
 *         type: integer
 *       - name: numeroTimbre
 *         description: Numéro du timbre
 *         in: formData
 *         required: true
 *         type: integer
 *       - name: prixTimbre
 *         description: Prix du timbre
 *         in: formData
 *         required: true
 *         type: intege
 *       - name: imageTimbreUrl
 *         description: Url de l'image du timbre
 *         in: formData
 *         required: true
 *         type: string 
 *       - name: isEtoile
 *         description: le timbre est il étoile?
 *         in: formData
 *         required: true
 *         type: boolean
 *     responses:
 *       200:
 *         description: register has been created successfully
 */
router.post('/updateTimbre', TimbreController.updateTimbre);


// Export routes
module.exports = router;