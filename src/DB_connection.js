require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_DEPLOY } = process.env;
const MenuDia = require("./models/MenuDia");
const User = require("./models/User");
const MenuMes = require("./models/MenuMes");

const sequelize = new Sequelize(DB_DEPLOY, { logging: false, native: false });

MenuDia(sequelize);
MenuMes(sequelize);
User(sequelize);

module.exports = {
  ...sequelize.models,
  sequelize,
};
