"use strict"

let age = prompt("Введіть свій рік");
let LastDigit = age % 10;

if (LastDigit == 1) {
    console.log(age + " рік");
} else if (LastDigit == 2 || LastDigit == 3 || LastDigit == 4) {
    console.log(age + " роки");
} else {
    console.log(age + " років");
}

if (age < 0) {
    console.log("Подумай краще");
}