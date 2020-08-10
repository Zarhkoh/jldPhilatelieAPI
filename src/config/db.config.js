const sequelize = require('../models').sequelize;
const Timbre = require('../models').timbre;

const models = {
  Timbre
};

const db = {
  models,
  sequelize
};

module.exports = db;