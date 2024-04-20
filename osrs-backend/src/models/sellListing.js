export default function(sequelize, DataTypes) {
    const Model = sequelize.define('sellListing', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        minimumAmount: {
            type: DataTypes.INTEGER,
            allowNull: true,
            comment: 'The minimum amount the user is willing to sell in US dollars'
        },
        maximumAmount: {
            type: DataTypes.INTEGER,
            allowNull: true,
            comment: 'The maximum amount the user is willing to sell in US dollars'
        },
        averageDeliveryTime: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: 'In minutes'
        },
        price: {
            type: DataTypes.DECIMAL(10, 3),
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: 'The amount of stock the user has for this listing in US dollars'
        },
        promoted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        status: {
            type: DataTypes.ENUM('pending', 'cancelled', 'completed'),
            allowNull: false,
            defaultValue: 'pending'
        }
    }, {
        tableName: 'sellListings'
    });

    Model.associate = (models) => {
        Model.belongsTo(models.user, {
            foreignKey: 'userId'
        });
    }

    return Model;
}