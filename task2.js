'use strict'

/*  I performed two options of task solution: 
    - Fist optios takes 4 arguments but doesn't meet the task example "pad(‘qwerty’, ‘+’, true)".
    - Second option takes only 3 arguments and the quantity variable is defined within the function.
      But this option meets your task example "у вас повинна бути одна функція pad(‘qwerty’, ‘+’, true)"

/*
let str = 'qwerty';
let symbol = '+';
let quantity = 7;
let wheretoput = 0;

function pad(str, symbol, quantity, wheretoput) {
    if (quantity <= 0) {
        return str;
    } 
    
    const addToStart = wheretoput == true;
    const addToEnd = wheretoput == false;

    if (addToStart) {
        return symbol.repeat(quantity - str.length) + str;
    } else if (addToEnd) {
        return str + symbol.repeat(quantity - str.length);
    } else {
        return str;
    }
    
}

console.log(pad(str, symbol, quantity, wheretoput));
*/

let str = 'qwerty';
let symbol = '+';
let wheretoput = 0;

function pad(str, symbol, wheretoput) {
    const quantity = 8;

    if (quantity <= 0) {
        return str;
    }

    const addToStart = wheretoput == true;
    const addToEnd = wheretoput == false;

    if (addToStart) {
        return symbol.repeat(quantity - str.length) + str;
    } else if (addToEnd) {
        return str + symbol.repeat(quantity - str.length);
    } else {
        return str;
    }
}

console.log(pad(str, symbol, wheretoput));

