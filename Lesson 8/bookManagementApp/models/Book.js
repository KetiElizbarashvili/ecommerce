const { DataTypes } = require('sequelize');
const sequelize = require('./path-to-sequelize-connection');

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

module.exports = Book;