"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let a = 0; a < numbers.length; a++) {
    let ending;
    if (numbers[a] === 1) {
        ending = `st`;
    }
    else if (numbers[a] === 2) {
        ending = `nd`;
    }
    else if (numbers[a] === 3) {
        ending = `rd`;
    }
    else {
        ending = `th`;
    }
    console.log(`${numbers[a]}${ending}`);
}
