const sequelize = require('../config/connection');

const createUsers = require('./user-seeds');
const createBlogPosts = require('./blogpost-seeds');
const createComments = require('./comment-seeds');

sequelize.sync({ force: true }).then(async () => {
    console.log('----- DATABASE SYNCED -----');
    await createUsers();
    console.log('----- USERS SEEDED -----');
    await createBlogPosts();
    console.log('----- BLOG POSTS SEEDED -----');
    await createComments();
    console.log('----- COMMENTS SEEDED -----');

    process.exit(0);
})