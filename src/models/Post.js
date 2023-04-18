import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";
import User from "./User";

const Post = sequelize.define("Post", {
    user_id: {
        type: DataTypes.NUMBER,
        allowNull: false,
    }
});

User.hasMany();

export default Post;