const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

User.hasMany(BlogPost, {
    foreignKey: 'authorId'
});
BlogPost.belongsTo(User, {
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