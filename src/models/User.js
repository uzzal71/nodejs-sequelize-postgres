import { Model, DataType, DataTypes } from "sequelize";
import sequelize from "../config/sequelize";

class User extends Model {};

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default User;