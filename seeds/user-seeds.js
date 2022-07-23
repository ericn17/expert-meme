const { User } = require('../models');

const userData = [{
        username: 'Michal Scott',
        password: 'mscott'

    },
    {
        username: 'Dwight Schrute',
        password: 'dschrute'
    },
    {
        username: 'Jim Halpert',
        password: 'jhalpert'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;