const crypto = require('crypto');

const ProductSchema = (sequelize, DataTypes) => {
  const ProductAttributesTable = sequelize.define('ProductAttribute', {
    id: { 
      type: DataTypes.STRING, 
      primaryKey: true,
      defaultValue: () => crypto.randomBytes(16).toString('hex')
    },
    productId: {
      type: DataTypes.STRING,
      allowNull: false,
      foreignKey: true
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
  }, {
    tableName: 'product_attributes',
    underscored: true,
    timestamps: false
  });

  ProductAttributesTable.associate = (models) => {
    ProductAttributesTable.belongsTo(models.Product, {
      foreignKey: 'productId',
      onDelete: 'CASCADE' 
    });
  };

  return ProductAttributesTable;
};

module.exports = ProductSchema;
