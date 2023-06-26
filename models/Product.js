// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNNull: false,
  }
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    // TODO validates that the value is a decimal //
  }
  stock:
  type: DataTypes.INTEGER
  allowNNull: false,
  // TODO set a default value of 10 //
  // TODO validates that the value is numeric //
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
