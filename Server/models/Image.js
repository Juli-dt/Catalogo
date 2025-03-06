const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Product = require('./Product'); 

const Image = sequelize.define('Image', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM('main', 'secondary', 'thumbnail'),
        allowNull: false,
        defaultValue: 'secondary'
    },
    productId: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'id'
        },
        onDelete: 'CASCADE'
    }
});

Product.hasMany(Image, { foreignKey: 'productId', onDelete: 'CASCADE' });
Image.belongsTo(Product, { foreignKey: 'productId' });

module.exports = Image;
