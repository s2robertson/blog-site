const { User } = require('../models');

const userData = [{
    username: 'User1',
    password: 'password1'
}, {
    username: 'User2',
    password: 'password2'
}, {
    username: 'User3',
    password: 'password3'
}];

module.exports = function() {
    return User.bulkCreate(userData, {
        individualHooks: true
    });
}