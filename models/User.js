const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

class User extends Model {
    comparePassword(input) {
        return bcrypt.compare(input, this.password);
    }
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
    }
}, {
    sequelize,
    hooks: {
        async beforeCreate(user) {
            user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
        },
        async beforeUpdate(user) {
            user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
        }
    },
    timestamps: false,
    underscored: true
});

module.exports = User;