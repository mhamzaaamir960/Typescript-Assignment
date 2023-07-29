"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userNames = ["Admin", "Omer", "Wasif", "Saad", "Saleh"];
for (let a = 0; a < userNames.length; a++) {
    if (userNames[a] === "Omer") {
        console.log(`Hello ${userNames[a]}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${userNames[a]}, thank you for logging in again.`);
    }
}
;
