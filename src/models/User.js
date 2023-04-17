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
    }
}, {
    sequelize
});

export default User;