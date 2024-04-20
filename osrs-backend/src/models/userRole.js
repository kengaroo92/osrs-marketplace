export default function(sequelize, DataTypes) {
  const Model = sequelize.define('userRole', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
  }, {
    tableName: 'userRoles',
    indexes: [
      {
        unique: true,
        fields: ['name']
      }
    ]
  });

  Model.associate = (models) => {
    Model.belongsToMany(models.user, {
      through: 'usersToUserRole',
      foreignKey: 'userRoleId',
      otherKey: 'userId'
    });
  }
  
  return Model;
}