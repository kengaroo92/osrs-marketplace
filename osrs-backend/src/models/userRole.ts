export default function(sequelize: any, DataTypes: any) {
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

  Model.associate = (models: any) => {
    Model.belongsToMany(models.user, {
      through: 'usersToUserRole',
      foreignKey: 'userRoleId',
      otherKey: 'userId'
    });
  }
  
  return Model;
}