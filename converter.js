// kilometers/hours/kilograms

let unit = "Одиниця виміру";
let quantity = 0;

switch (unit) {
    case "кілометри":
        convertedUnit = "метри";
        convertedQuantity = 1000 * quantity;
        break;
    case "години":
        convertedUnit = "хвилини";
        convertedQuantity = 60 * quantity;
        break;
    case "кілограми":
        convertedUnit = "грами";
        convertedQuantity = 1000 * quantity;
        break;
}
if (unit === "кілометри" || unit === "години" || unit === "кілограми") {
    console.log(quantity + ' ' + unit + ' is ' + convertedQuantity + ' ' + convertedUnit);
} else {
    console.log("невідома одиниця виміру");
}