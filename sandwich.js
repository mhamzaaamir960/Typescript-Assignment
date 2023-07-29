"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let items = ["lettuce", "tomato", "cheese", "ham"];
function sandwich(...items) {
    return `I want sandwich with ${items}.`;
}
console.log(sandwich("lettuce", "tomato", "cheese", "ham"));
console.log(sandwich("bacon", "egg"));
console.log(sandwich("avocado", "mayonnaise"));
