'use strict'

function myBlend(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));

      [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
  }
  
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log("Original Array:", arr);
  
  myBlend(arr);
  console.log("Shuffled Array:", arr);
  