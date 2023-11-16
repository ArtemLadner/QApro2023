'use strict'

let dog = {
    name: 'Asman',
    age: 5 + ' years',
    city: 'Odesa',
    getInfo: function () {
      for (let key in this) {
        if (typeof this[key] !== 'function') {
          console.log(`${key}: ${this[key]}`);
        }
      }
    },
  };

  //new properties:
  dog.gender = 'male',
  dog.hobbies = ['eating', ' sleeping'];

  dog.getInfo(); // Displaying all properties, including the newly added one
  