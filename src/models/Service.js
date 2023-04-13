import { DataTypes, Sequelize } from 'sequelize';
const sequelize = new Sequelize('sqlite::memory:');

const Service = sequelize.define('Service', {
  // Model attributes are defined here
  title: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
});

export default Service;