import { Model, DataType } from "sequelize";
import sequelize from "../config/sequelize";

class User extends Model {};

User.init({});

export default User;