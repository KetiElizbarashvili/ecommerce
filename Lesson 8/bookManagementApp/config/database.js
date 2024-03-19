const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('library', 'user', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false 
});

module.exports = sequelize;
 