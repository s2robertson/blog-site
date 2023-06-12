require('dotenv').config();

const Sequelize = require('sequelize');

const jawsDbUrl = process.env.JAWSDB_URL;
const sequelize = jawsDbUrl ? new Sequelize(jawsDbUrl)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql'
    });

module.exports = sequelize;
