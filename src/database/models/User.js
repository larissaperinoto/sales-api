const crypto = require('crypto');

const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    id: { 
      type: DataTypes.STRING, 
      primaryKey: true,
      defaultValue: () => crypto.randomBytes(16).toString('hex')
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'users',
    underscored: true,
    timestamps: false
  });


  UserTable.associate = (models) => {
    UserTable.hasMany(models.Product, {
      foreignKey: 'userId'
    })
  };

  return UserTable;
};

module.exports = UserSchema;
