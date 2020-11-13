const visitor = require('../routes/visitor.route');
const timbre = require('../routes/timbre.route');
const auth = require('../routes/auth.route');
const devis = require('../routes/devis.route');
const news = require('../routes/news.route');
const livraison = require('../routes/livraison.route');
const CONFIG = require('../config/config');

// GESTION DES ROUTES PRINCIPALES
module.exports = app => {

    //AUTHENTIFICATION
    app.use(CONFIG.uri_prefix_main, auth);

    // TIMBRE
    app.use(CONFIG.uri_prefix_main, timbre);

    // VISITOR
    app.use(CONFIG.uri_prefix_main, visitor);

    // DEVIS
    app.use(CONFIG.uri_prefix_main, devis);

    //NEWS
    app.use(CONFIG.uri_prefix_main, news);

    //LIVRAISON
    app.use(CONFIG.uri_prefix_main, livraison);

};