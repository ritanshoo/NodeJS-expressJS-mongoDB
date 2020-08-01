const fs = require('fs');
const path = require('path');

let printUsers = (users) => {
    fs.writeFile(path.join(__dirname,'users.json'),JSON.stringify(users),'utf-8',(err) => {
        if(err) throw  err;
        console.log('data is saved');
    });
};

module.exports = {
    printUsers
};