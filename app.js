const express = require('express');
const cors = require('cors');
const app = express();
const CONFIG = require('./src/config/config');
const db = require('./src/config/db.config');
const db_init = require('./init_db/init_db');

app.use(express.json());
app.use(express.urlencoded({
  limit: '10mb',
  extended: true
}));
app.use(cors());

// SWAGGER
require('./src/config/swagger.config')(app);
// ROUTES
require('./src/modules/router.modules')(app);

// redirect to /api-docs Swagger
app.get('/', (req, res) =>
  res.redirect('api-docs')
);

// Log Env
console.log(`Environment: ${CONFIG.app}`);

//Database init
if (CONFIG.app === 'local') {
  //Create database manually if it doesn't already exists because Sequelize don't handle it.
  db_init.createDbIfNotExists();
  // Sync Database
  db.sequelize.sync({
    // force: true pour forcer les changements sur la bdd
    force: false
  }).then(function () {
    //Décommenter pour avoir un mock data
    require('./init_db/init_db_data')(db);
    console.log('La synchronisation avec la base de données a été effectuée avec succès');
  }).catch(function (err) {
    console.log(err.message);
  });
}

app.listen(CONFIG.port, () => {
  if (CONFIG.app === 'local') {
    console.log(`Le serveur JLDPhilatelie est démarré sur le port ${CONFIG.port}`);
  }
});

module.exports = app;