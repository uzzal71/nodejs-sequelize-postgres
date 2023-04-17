import { Model, DataType, DataTypes } from "sequelize";
import sequelize from "../config/sequelize";

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
    avater: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'default.png'
    },
    type: {
        type: DataTypes.ENUM('user', 'admin'),
        defaultValue: 'customer'
    },
    state: {
        type: DataTypes.ENUM('phone_not_verified', 'email_not_verified', 'active'),
        defaultValue: 'phone_not_verified'
    }
}, {
    sequelize
});

export default User;