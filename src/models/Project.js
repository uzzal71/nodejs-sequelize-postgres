import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const Project = sequelize.define('Project', {
  // Model attributes are defined here
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  client: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'projects'
});

export default Project;