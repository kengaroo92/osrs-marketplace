export default function(sequelize, DataTypes) {
    const Model = sequelize.define('balanceHistory', {
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
        balanceChange: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        balanceBefore: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        balanceAfter: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        changed: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
        tableName: 'balanceHistories'
    });

    Model.associate = (models) => {
        Model.belongsTo(models.transaction, {
            foreignKey: 'transactionId'
        });
        Model.belongsTo(models.user, {
            foreignKey: 'userId'
        });
    }

    return Model;
}