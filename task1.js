'use strict'

//Hello Mr Дмитро. I created 3 codes in case of i understood the task wrong. 

//test 1 - can find any characters if minimum string length is 6;
const testString1 = '2!@#  Wq.'
const re1 = /[\w\W]{6,}/;
console.log(re1.test(testString1)); // Output: true

//test 2 - can find latin letters, numbers and certain characters if minimum string length is 6.
const testString2 = '1b!@#$Q';
const re2 = /[B-Zb-z1-9\.\!\@\#\$]{6,}/;
console.log(re2.test(testString2)); // Output: true

//test 3 - can find latin letters, numbers and certain characters in any string length.
const testString3 = '1b!@';
const re3 = /[B-Zb-z1-9\.\!\@\#\$]/;
console.log(re3.test(testString2)); // Output: true
