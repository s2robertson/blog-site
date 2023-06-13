const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        /*references: {
            model: 'user',
            key: 'id'
        }*/
    },
    blogPostId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        /*references: {
            model: 'blog_post',
            key: 'id'
        }*/
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: true,
    underscored: true
});

module.exports = Comment;