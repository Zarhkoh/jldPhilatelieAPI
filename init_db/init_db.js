const mysql2 = require('mysql2');
const CONFIG = require('../src/config/config');

const dbName = CONFIG.db_name;
let mysqlCon = mysql2.createConnection({
    host: CONFIG.db_host,
    user: CONFIG.db_user,
    port: CONFIG.db_port,
    password: CONFIG.db_password
});

module.exports.createDbIfNotExists = () => {
    try {
        mysqlCon.query('CREATE DATABASE IF NOT EXISTS ' + dbName + ';');
    } catch (err) {
        logger.error(err);
    }
};