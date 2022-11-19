'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    fullname: DataTypes.STRING,
    email: DataTypes.TEXT,
    password: DataTypes.STRING,
    tgl_lahir: DataTypes.TEXT,
    alamat: DataTypes.TEXT,
    image: DataTypes.STRING,
    refresh_token: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};