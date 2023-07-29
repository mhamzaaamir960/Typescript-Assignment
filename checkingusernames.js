"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["Ali", "Omer", "Saad", "Saleh", "Ahsan"];
let new_users = ["Ibrahim", "Wasif", "Ali", "Saad", "Rehman"];
let current_user = current_users.map(value => value.toLocaleLowerCase());
let new_user = new_users.map(value => value.toLocaleLowerCase());
for (let a = 0; a < new_users.length; a++) {
    if (current_user.includes(new_user[a])) {
        console.log(`Username '${new_user[a]}' is already taken. Please choose a different username.`);
    }
    if (!current_user.includes(new_user[a])) {
        console.log(`Username ${new_user[a]} is avaiable`);
    }
}
