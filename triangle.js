'use strict'

//  example #1
/*
function triangle(height, symbol) {
    if (height <= 0) {
        return;
    }
        
    triangle(height -1, symbol);
    console.log(symbol.repeat(height));
}

triangle(5, '*');
*/

//  example #2
/*
function triangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += symbol;
        }
        console.log(row);
    }
}

triangle(5, '*');
*/