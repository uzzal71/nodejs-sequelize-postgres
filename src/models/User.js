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
}, {
    sequelize
});

export default User;