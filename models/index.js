const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

User.hasMany(BlogPost, {
    as: 'author',
    foreignKey: 'authorId'
});
BlogPost.belongsTo(User, {
    as: 'author',
    foreignKey: 'authorId'
});

User.hasMany(Comment, {
    foreignKey: 'commenterId'
});
Comment.belongsTo(User, {
    foreignKey: 'commenterId'
});

BlogPost.hasMany(Comment, {
    foreignKey: 'blogPostId'
});
Comment.belongsTo(BlogPost, {
    foreignKey: 'blogPostId'
});

module.exports = { User, BlogPost, Comment };