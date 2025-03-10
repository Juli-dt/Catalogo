const { DataTypes } = require('sequelize');
const sequelize = require('../config/db')

const Product = sequelize.define('Product', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    animal: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Product;