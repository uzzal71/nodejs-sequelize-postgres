// Brand model
import { DataTypes, Model } from 'sequelize'
import sequelize from './config/sequelize'

Class Brand extends Model {}

Brand.init({
    name: {
        type: DataTypes.STRING',
        allowNull: false
    }
},
{
    sequelize,
    tableName: 'brands'
    timestamps: true
}
);
