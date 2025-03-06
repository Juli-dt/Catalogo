const { DataTypes } = require('sequelize');
const sequelize = require('../config/db')
const Product = require('./Product'); 

const ProductVariation = sequelize.define('ProductVariation', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    size: { type: DataTypes.STRING, allowNull: true },
    color: { type: DataTypes.STRING, allowNull: true }, 
    weight: { type: DataTypes.FLOAT, allowNull: true }, 
    stock: { type: DataTypes.INTEGER, allowNull: true }, 
    type: { type: DataTypes.INTEGER, allowNull: true } 
})

Product.hasMany(ProductVariation, { foreignKey: 'productId', onDelete: 'CASCADE' });
ProductVariation.belongsTo(Product, { foreignKey: 'productId' });

module.exports = ProductVariation;