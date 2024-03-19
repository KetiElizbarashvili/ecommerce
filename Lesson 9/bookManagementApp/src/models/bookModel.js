// const { Model, DataTypes } = require('sequelize');

// class BookModel extends Model {
//     static init(connection) {
//         super.init(
//             {
//                 id: {
//                     type: DataTypes.INTEGER,
//                     primaryKey: true,
//                     autoIncrement: true,
//                 },
//                 title: {
//                     type: DataTypes.STRING(100),
//                     allowNull: false,
//                 },
//                 author: {
//                     type: DataTypes.STRING(100),
//                     allowNull: false,
//                 },
//                 publication_year: {
//                     type: DataTypes.INTEGER(),
//                     allowNull: false,
//                 },
//                 genre: {
//                     type: DataTypes.ARRAY(DataTypes.STRING),
//                 },
//                 description: {
//                     type: DataTypes.STRING(),
//                     allowNull: true,
//                 },
//                 cover_image: {
//                     type: DataTypes.STRING(),
//                 },
//             },
//             {
//                 sequelize: connection,
//                 tableName: 'books',
//                 timestamps: true,
//                 force: true,
//             }
//         );
//     }
// }

// module.exports = { BookModel };

const { DataTypes } = require('sequelize');
const sequelize = require('../util/db');

const BookModel = sequelize.define(
    'BookModel',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        publication_year: {
            type: DataTypes.INTEGER(),
            allowNull: false,
        },
        genre: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
        description: {
            type: DataTypes.STRING(),
            allowNull: true,
        },
        cover_image: {
            type: DataTypes.STRING(),
        },
    },
    {
        tableName: 'books',
        timestamps: true,
    }
);

module.exports = BookModel;
