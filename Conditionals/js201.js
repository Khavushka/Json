'use strict';
var a = Number(prompt('Enter y year')); // du skriver et år

function leapYear(y)
{
 return ((y % 4 === 0) || (y % 400 === 0)) && (y % 100 != 0);
}           /*formlen hjælper med at regne ud om det leapyear eller ikke*/

console.log(leapYear(a));//den bliver vist i consolen her.