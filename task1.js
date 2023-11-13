'use strict'

function myIsNaN(value) {
    return typeof value === 'number' && value !== value;
  }
  
  let a = 'qwerty' / 10;
  console.log(myIsNaN(a));
  console.log(myIsNaN(undefined));
  console.log(myIsNaN(NaN));
  console.log(myIsNaN("qwerty"));
  