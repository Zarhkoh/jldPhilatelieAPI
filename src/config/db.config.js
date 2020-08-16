const sequelize = require('../models').sequelize;
const Timbre = require('../models').timbre;
const User = require('../models').user;
const models = {
  Timbre,
  User
};

const db = {
  models,
  sequelize
};

module.exports = db;