const sequelize = require('../models').sequelize;
const Timbre = require('../models').timbre;
const User = require('../models').user;
const Visitor = require('../models').visitor;

const models = {
  Timbre,
  User,
  Visitor
};

const db = {
  models,
  sequelize
};

module.exports = db;