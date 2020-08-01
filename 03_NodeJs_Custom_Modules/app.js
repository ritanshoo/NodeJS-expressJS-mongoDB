// load custom module
const util = require('./admin/util');
const profile = require('./data/profile');

// util.js
util.greet('John');

// profile.js
let users = [
    {
        name : 'John',
        age : 45,
        designation : 'Manager'
    },
    {
        name : 'Wilson',
        age : 25,
        designation : 'Software Engineer'
    }
];
profile.printUsers(users);