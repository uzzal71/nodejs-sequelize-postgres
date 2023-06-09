// Product Model
import { DataTypes } from 'sequelize';
import sequelize from "../config/sequelize";

const Product = sequelize.define('Product', {
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
      tax: {
         type: DataTypes.DOUBLE,
         defaultValue: 0.00
      },
      tax_type: {
         type: DataTypes.ENUM('amount', 'percent'),
         defaultValue: 'amount'
      },
      short_description: {
         type: DataTypes.TEXT,
         allowNull: false 
      },
      description: {
         type: DataTypes.TEXT,
         allowNull: true
      },
      tags: {
         type: DataTypes.STRING,
         allowNull: true
      },
      thumbnail: {
         type: DataTypes.STRING,
         allowNull: false
      },
      gallery_image: {
         type: DataTypes.STRING,
         allowNull: true
      },
      meta_title: {
         type: DataTypes.STRING,
         allowNull: true
      },
      meta_description: {
         type: DataTypes.STRING,
         allowNull: true
      },
      meta_image: {
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
   
