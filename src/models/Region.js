// Create Region Model
import { Model, DataTypes } from 'sequelize';
import sequelize from './config/sequelize';

class Region extends Model {};

Region.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    },
    currency_id: {
        type: DataTypes.NUMBER,
        defaultValue: 1
    }
}, {
    sequelize,
    tableName: 'regions',
    timestamps: true
});

export default Region;
