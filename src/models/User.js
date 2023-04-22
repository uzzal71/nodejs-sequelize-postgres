import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize";
import Post from "./Post";

class User extends Model {};

User.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
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
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    emailVerifiedAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
    phoneVerifiedAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
    verified_code: {
        type: DataTypes.STRING,
        allowNull: true
    },
    type: {
        type: DataTypes.ENUM('user', 'admin'),
        defaultValue: 'customer'
    },
    state: {
        type: DataTypes.ENUM('phone_not_verified', 'email_not_verified', 'active'),
        defaultValue: 'phone_not_verified'
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    avater: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'default.png'
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'users',
    timestamps: true
});

User.hasMany(Post, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

export default User;
