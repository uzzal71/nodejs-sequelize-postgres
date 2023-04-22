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
       allowNull: false,
       references: {
           mode: Category,
           key: 'key'
       }
    },
    title: {
       type: DataTypes.STRING,
       allowNull: false
    },
    slug: {
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
    },
    tags: {
       type: DataTypes.STRING,
       allowNull: true
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
