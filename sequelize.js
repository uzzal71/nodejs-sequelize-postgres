const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'university.db'
});

export default sequelize;