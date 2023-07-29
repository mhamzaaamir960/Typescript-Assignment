"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function car_info(manufacturer, model, ...arg) {
    let car_information = {
        manufacturer: manufacturer,
        model: model,
        ...arg,
    };
    return car_information;
}
let a = car_info("Tesla", "2020", { color: "Red", feature: "Electric car" });
console.log(a);
