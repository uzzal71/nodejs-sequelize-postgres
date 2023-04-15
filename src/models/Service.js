import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize';

class Service extends Model {}

Service.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'Service'
});

export default Service;