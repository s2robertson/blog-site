const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

User.hasMany(BlogPost);
BlogPost.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

BlogPost.hasMany(Comment);
Comment.belongsTo(BlogPost);

module.exports = { User, BlogPost, Comment };