'use strict'

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
  };
  
  services['Розбити скло'] = "200 грн"; // Adding a new service
  
  var salon = {
    services: services,
  
    price: function () {
      let total = 0;
      for (let service in this.services) {
        total += parseInt(this.services[service]);
      }
      return total;
    },
  
    minPrice: function () {
      let min = Infinity;
      for (let service in this.services) {
        let price = parseInt(this.services[service]);
        if (price < min) {
          min = price;
        }
      }
      return min;
    },
  
    maxPrice: function () {
      let max = 0;
      for (let service in this.services) {
        let price = parseInt(this.services[service]);
        if (price > max) {
          max = price;
        }
      }
      return max;
    },
  };
  
  console.log("Total Price:", salon.price());
  console.log("Minimum Price:", salon.minPrice());
  console.log("Maximum Price:", salon.maxPrice());