import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";
import User from "./User";

const Post = sequelize.define("Post", {
    user_id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    }
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

export default Post;