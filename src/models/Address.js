import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const Address = sequelize.define('Address', {
    user_id: {
        type: DataTypes.INTEGER,
        references: 'users',
        referencesKay: 'id'
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Address;