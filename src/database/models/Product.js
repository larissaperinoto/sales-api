const crypto = require('crypto');

const ProductSchema = (sequelize, DataTypes) => {
  const ProductTable = sequelize.define('Product', {
    id: { 
      type: DataTypes.STRING, 
      primaryKey: true,
      defaultValue: () => crypto.randomBytes(16).toString('hex')
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      foreignKey: true
    },
  }, {
    tableName: 'products',
    underscored: true,
    timestamps: false
  });

  ProductTable.associate = (models) => {
    ProductTable.belongsTo(models.User, {
      foreignKey: 'userId'
    });

    ProductTable.hasMany(models.ProductAttribute, {
      foreignKey: 'productId',
      as: 'attributes'
    });
  };

  return ProductTable;
};

module.exports = ProductSchema;
