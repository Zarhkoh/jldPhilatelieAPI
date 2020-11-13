const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const CONFIG = require('./config');


module.exports = function(app) {
    // Extended: https://swagger.io/specification/#infoObject
    const swaggerOptions = {
        swaggerDefinition: {
            info: {
                title: `API ${CONFIG.db_name}`,
                description: 'API Pour le site JLD-Philatelie ',
                contact: {
                    name: 'Sullivan Delaby'
                },
                servers: [`http://${CONFIG.db_host}:${CONFIG.db_port}`]
            }
        },
        apis: ['./src/routes/*.js', 'app.js']
    };

    const swaggerDocs = swaggerJsDoc(swaggerOptions);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

};