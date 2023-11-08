'use strict'

let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 !== 0) {
        sum += i;
    }
}

console.log('The sum of numbers from 1 to 100 that are not multiples of 3: ' + sum);

