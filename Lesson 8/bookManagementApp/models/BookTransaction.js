const { DataTypes } = require('sequelize');
const sequelize = require('./path-to-sequelize-connection');

const BookTransaction = sequelize.define('BookTransaction', {
  bookId: {
    type: DataTypes.INTEGER,
    references: {
      model: Book,
      key: 'id'
    }
  },
  type: {
    type: DataTypes.ENUM('borrowed', 'returned'),
    allowNull: false
  },
  
});

module.exports = BookTransaction;
