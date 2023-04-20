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
    },
    title: {
       type: DataTypes.STRING,
       allowNull: false
    },
    description: {
       type: DatazTypes.STRING,
       allowNull: false
    },
    image: {
       type: DataTypes.STRING,
       defaultValue: 'default.png'
    }
},
{
    timestamps: true
}
);

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

export default Post;
