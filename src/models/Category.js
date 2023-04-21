// Category model
import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const Category = sequelize.define('Category', {
     name: {
        type: DataTypes.STRING,
        allowNull: false
     }
});
