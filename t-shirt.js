"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1
function make_shirt() {
    let size = "Medium";
    let message = "Hard work is the key to success";
    console.log(`Size: ${size}\nMessage: "Hard work is the key to success"`);
}
make_shirt();
//2
function make_shirt1(size, message) {
    console.log(`Size: ${size}\nMessage: "Hard work is the key to success"`);
}
make_shirt1("Medium", "Hard work is the key to success");
