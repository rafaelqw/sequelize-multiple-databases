const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes, count) => {
  class User extends Model {}

  User.init({
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false
  });

  User.count = count;

  return User;
}