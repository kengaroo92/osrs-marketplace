export default function(sequelize: any, DataTypes: any) {
    const Model = sequelize.define('buyListing', {
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
        }
    }, {
        tableName: 'buyListings'
    });

    Model.associate = (models: any) => {
        Model.belongsTo(models.user, {
            foreignKey: 'userId'
        });
    }

    return Model;
}