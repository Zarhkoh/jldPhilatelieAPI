const timbre = require('../routes/timbre.route');
const CONFIG = require('../config/config');

// GESTION DES ROUTES PRINCIPALES
module.exports = app => {
    // TIMBRE
    app.use(CONFIG.uri_prefix_main, timbre);

};