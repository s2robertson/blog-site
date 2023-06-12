const User = require('./User');
const BlogPost = require('./BlogPost');

User.hasMany(BlogPost, {
    foreignKey: 'authorId'
});

BlogPost.belongsTo(User, {
    foreignKey: 'authorId'
});

module.exports = { User, BlogPost };