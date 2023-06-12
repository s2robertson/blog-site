const sequelize = require('../config/connection');

const createUsers = require('./user-seeds');
const createBlogPosts = require('./blogpost-seeds');

sequelize.sync({ force: true }).then(async () => {
    console.log('----- DATABASE SYNCED -----');
    await createUsers();
    console.log('----- USERS SEEDED -----');
    await createBlogPosts();
    console.log('----- BLOG POSTS SEEDED -----');

    process.exit(0);
})