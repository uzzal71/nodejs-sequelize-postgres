// Brand model
import { DataTypes, Model } from 'sequelize'
import sequelize from './config/sequelize'

Class Brand extends Model {}

Brand.init({},
{
    sequelize,
    tableName: 'brands'
    timestamps: true
}
);
