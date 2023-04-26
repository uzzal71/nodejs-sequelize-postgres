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
      },
      discount: {
         type: DataTypes.DOUBLE,
         defaultValue: 0.00
      },
      discount_type: {
         type: DataTypes.ENUM('amount', 'percent'),
         defaultValue: 'amount'
      },
      short_description: {
         type: DataTypes.TEXT,
         allowNull: false 
      },
      discription: {
         type: DataTypes.TEXT,
         allowNull: true
      },
      tags: {
         type: DataTypes.STRING,
         allowNull: true
      },
      is_published: {
         type: DataTypes.BOOLEAN,
         defaultValue: false
      },
      is_views: {
         type: DataTypes.NUMBER,
         defaultValue: 0
      },
      is_active: {
         type: DataTypes.BOOLEAN,
         defaultValue: true
      },
      deletedAt: {
         type: DataTypes.DATETIME,
         allowNull: true
      }
},{
      tableName: 'products',
      timestamps: true
});

export default Product;
   
