// Product Model
import { DataTypes } from 'sequelize';
import sequelize from './config/sequelize';

const Post = sequelize.define({},{
      tableName: 'products',
      timestamps: true
});
