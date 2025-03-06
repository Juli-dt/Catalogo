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
    size: { type: DataTypes.STRING, allowNull: true }, // Tamaño (Ej: Pequeño, Mediano, Grande)
    color: { type: DataTypes.STRING, allowNull: true }, // Color si aplica
    weight: { type: DataTypes.FLOAT, allowNull: true }, // Peso (Ej: 500g, 1kg)
    stock: { type: DataTypes.INTEGER, allowNull: true } // Cantidad disponible
})

Product.hasMany(ProductVariation, { foreignKey: 'productId', onDelete: 'CASCADE' });
ProductVariation.belongsTo(Product, { foreignKey: 'productId' });

module.exports = ProductVariation;