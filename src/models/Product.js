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
      },
      price: {
          type: DataTypes.DOUBLE,
          defaultValue: 0.00
      }
},{
      tableName: 'products',
      timestamps: true
});

export default Product;
