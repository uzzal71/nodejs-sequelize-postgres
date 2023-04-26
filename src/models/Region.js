// Create Region Model
import { Model, DataTypes } from 'sequelize';
import sequelize from './config/sequelize';

class Region extends Model {};

Region.init({}, {});

export default Region;
