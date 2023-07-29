"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1 
function make_shirt(size_1, message_1, size_2, message_2) {
    console.log(`Size: ${size_1}\nMessage: ${message_1}`);
    console.log(`Size: ${size_2}\nMessage: ${message_2}`);
}
make_shirt("Large", "'I love Typescript'", "Medium", "'Hard work is the key to success'");
//2 
function make_shirt2(size_1 = "Large", message_1 = "'I love Typescript'") {
    console.log(`Size: ${size_1}\nMessage: ${message_1}`);
}
make_shirt2();
make_shirt2("Medium", "'Hard work is the key to success'");
