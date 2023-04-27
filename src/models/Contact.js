import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const Contact = sequelize.define('Contact', {
    // Model attributes are defined here
    permanent_address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    current_address: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'contacts',
    timestamps: true
});

export default Contact;