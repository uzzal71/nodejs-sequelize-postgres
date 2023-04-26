// Create Region Model
import { Model, DataTypes } from 'sequelize';
import sequelize from './config/sequelize';

class Region extends Model {};

Region.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'regions'
});

export default Region;
