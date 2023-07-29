"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let personName1 = "muhammad hamza aamir";
console.log(personName1.toLowerCase());
console.log(personName1.toUpperCase());
let name = personName1.split(" ");
let titleCase = " ";
for (let a = 0; a < name.length; a++) {
    titleCase += name[a].charAt(0).toUpperCase() + name[a].slice(1).toLowerCase() + " ";
}
;
console.log(titleCase);
