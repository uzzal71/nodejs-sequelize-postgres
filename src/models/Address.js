import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const Address = sequelize.define('Address', {
    user_id: {
        type: DataTypes.INTEGER,
        references: 'users',
        referencesKay: 'id'
        
    }
});

export default Address;