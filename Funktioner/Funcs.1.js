 //returns the first character
'use strict';
var first = function(s) {
    return s.substring(0, 1);
}
let str = prompt('indtast streng');
console.log(first(str));


//returns the last character
var last = function(s) {
    return s.slice(-1);
}
console.log(last(str));

// returns middle character
var middle = function(s) {
    return s.substring(1, 4);
}
console.log(middle(str));