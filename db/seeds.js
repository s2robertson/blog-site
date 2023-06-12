const sequelize = require('../config/connection');

const createUsers = require('./user-seeds');

sequelize.sync({ force: true }).then(async () => {
    console.log('----- DATABASE SYNCED -----');
    await createUsers();
    console.log('----- USERS SEEDED -----');

    process.exit(0);
})