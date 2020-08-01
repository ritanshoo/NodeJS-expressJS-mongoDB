// loading npm module [ _ is used for lodash ]
const _=require('lodash');
const moment = require('moment');


// normal javascript approch
let friends=['rahul','suraj','pankaj','shashwat','pranjal'];
let result='';
friends.forEach(function (friend) {
    result+=`${friend} `;

});
console.log(result);


// lodash approach
friends=['rahul','suraj','pankaj','shashwat','pranjal'];
result='';
console.log('with lodash approach');
_.forEach(friends,function (friend) {
    result+=`${friend} `;
});
console.log(result);

//mixed array with normal javascript
let mixedArray = [100,'test',1515,'abc',544];
let countElementsJS = function (array) {
    let numberCount = 0;
    let stringCount = 0;
    array.forEach(function(element) {
        if(typeof element === 'number'){
            numberCount++;
        }
        if(typeof element === 'string'){
            stringCount++;
        }
    });
    return {numberCount , stringCount};
};
let output = countElementsJS(mixedArray);
console.log(output);

// with lodash
mixedArray = [100,'test',1515,'abc',544];
let countElementsLodash = function(array) {
    let numberCount = 0;
    let stringCount = 0;
    _.forEach(array,function(element) {
        _.isNumber(element) ? numberCount++ : numberCount;
        _.isString(element) ? stringCount++ : stringCount;
    });
    return {numberCount , stringCount};
};
output = countElementsLodash(mixedArray);
console.log(output);

// moment module
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment("19990607", "YYYYMMDD").fromNow());

//locale ''
moment.locale('hi');
 console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));