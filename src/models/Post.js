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
    category_id: {
       type: DataTypes.STRING,
       allowNull: false
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
    timestamps: true,
    tableNaame: 'podts'
}
);

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

export default Post;
