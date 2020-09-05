'use strict';
var a = Number(prompt('Enter cpr')); // du skriver cpr-nummemr

function cpr(y)
{
 return (y % 2 === 0); //dividere med tallet og se om det ulige eller lige tal
}           

console.log(cpr(a));//den bliver vist i consolen her.