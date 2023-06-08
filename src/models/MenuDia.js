const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "MenuDia",
    {
      id: {
        type: DataTypes.INTEGER,

        primaryKey: true,
        allowNull: false,
      },
      menuPrincipal: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      menuUno: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      menuDos: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      menuDieta: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
