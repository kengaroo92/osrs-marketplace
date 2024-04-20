export default function(sequelize, DataTypes) {
    const Model = sequelize.define('transaction', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        listingId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        buyerId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sellerId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            comment: 'The total amount of the transaction in US dollars'
        },
        type: {
            type: DataTypes.ENUM('buy', 'sell'),
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
            allowNull: false,
            defaultValue: 'pending'
        },
        buyerStatus: {
            type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
            allowNull: false,
            defaultValue: 'pending'
        },
        sellerStatus: {
            type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
            allowNull: false,
            defaultValue: 'pending'
        },
        paid: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        tableName: 'transactions'
    });

    Model.associate = (models) => {
        Model.belongsTo(models.buyListing, {
            foreignKey: 'listingId'
        });
        Model.belongsTo(models.sellListing, {
            foreignKey: 'listingId'
        });
        Model.belongsTo(models.user, {
            foreignKey: 'buyerId',
            as: 'buyer'
        });
        Model.belongsTo(models.user, {
            foreignKey: 'sellerId',
            as: 'seller'
        });
        Model.hasMany(models.balanceHistory, {
            foreignKey: 'transactionId',
            as: 'balanceChanges'
        });
    }

    return Model;
}