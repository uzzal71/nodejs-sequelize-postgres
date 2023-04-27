// Brand model
import { DataTypes, Model } from 'sequelize';
import sequelize from './config/sequelize';

class Brand extends Model {}

Brand.init({
    name: {
        type: DataTypes.STRING',
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
},
{
    sequelize,
    tableName: 'brands',
    timestamps: true
}
);
