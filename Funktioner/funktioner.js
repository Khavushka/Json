'use strict';
var a = Number(prompt('amount including')); 

    function addVat(a){
        return (a * 1.25); 
    }           

console.log(addVat(a));


// subVat

var a = Number(prompt('amount excluding'));

    function subVat(a){
        return (a / 1.25);
    }

console.log(subVat(a));

//calcVat

var a = Number(prompt('returns given amount'));

    function calcVat(a) {
        return(a - 0.25);
}

console.log(calcVat(a));