// Product Model
import { DataTypes } from 'sequelize';
import sequelize from './config/sequelize';

const Product = sequelize.define({
      category_id: {
          type: DataTypes.STRING,
          allowNull: false
      },
      brand_id: {
          type: DataTypes.STRING,
          allowNull: false 
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false 
      },
      slug: {
          type: DataTypes.STRING,
          allowNull: false
      }
},{
      tableName: 'products',
      timestamps: true
});
