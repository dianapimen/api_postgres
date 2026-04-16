'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gato extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Gato.init({
    nombre: DataTypes.STRING,
    raza: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    color: DataTypes.STRING,
    peso: DataTypes.FLOAT,
    vacunado: DataTypes.BOOLEAN,
    dueno: DataTypes.STRING,
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Gato',
  });
  return Gato;
};