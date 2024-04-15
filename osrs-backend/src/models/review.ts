export default function(sequelize: any, DataTypes: any) {
    const Model = sequelize.define('review', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        transactionId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        revieweeUserId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'reviews',
        indexes: [
            {
                fields: ['userId']
            },
            {
                fields: ['revieweeUserId']
            },
            {
                fields: ['transactionId']
            }
        ]
    });

    Model.associate = (models: any) => {
        Model.belongsTo(models.user, {
            foreignKey: 'userId'
        });
        Model.belongsTo(models.user, {
            foreignKey: 'reviewerUserId',
            as: 'reviewer'
        });
        Model.belongsTo(models.transaction, {
            foreignKey: 'transactionId'
        });
    }
    
    return Model;
}