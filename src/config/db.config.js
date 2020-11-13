const sequelize = require('../models').sequelize;
const Timbre = require('../models').timbre;
const User = require('../models').user;
const Visitor = require('../models').visitor;
const Devis = require('../models').devis;
const Livraison = require('../models').livraison;
const News = require('../models').news;




const models = {
    Timbre,
    User,
    Visitor,
    Devis,
    Livraison,
    News
};

const db = {
    models,
    sequelize
};

module.exports = db;