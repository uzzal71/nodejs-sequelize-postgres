// Product Model
import { DataTypes } from 'sequelize';
import sequelize from './config/sequelize';

const Post = sequelize.define({
      name: {
          type: DataTypes.STRING,
          allowNull: false 
      }
},{
      tableName: 'products',
      timestamps: true
});
