export default function(sequelize: any, DataTypes: any) {
  const Model = sequelize.define('usersToUserRole', {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      userRoleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      }
    }, {
      tableName: 'usersToUserRoles',
      indexes: [
        {
          unique: true,
          fields: ['userId', 'userRoleId']
        }
      ]
    });
  
  return Model;
}
