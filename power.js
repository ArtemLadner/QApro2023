'use strict'

function pow(x, y) {
    let result = 1;

    for (let i = 1; i <= y; i++) {
        result *= x;
    }

    return result;
}

const base = 3;
const exponent = 3;
const result = pow(base, exponent);
console.log(result);