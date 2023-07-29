

let countries = ["Pakistan","Iran","Iran","India"];
// 1
console.log(`Is countries[0] == "Pakistan" && countries.length === 4? I predict true.`)
console.log(countries[0] == "Pakistan" && countries.length === 4 ) ; //true

// 2
console.log(`Is countries[6] === "Iran" && countries.length == 4? I predict false.`);
console.log(countries[6] === "Iran" && countries.length == 4); // false

//3
let  fruit = "Orange";
console.log(`Is fruit.toLocaleLowerCase(fruit) !== "Orange"? I predict true.`);
console.log(fruit.toLocaleLowerCase(fruit) !== "Orange"); // true

// 4
console.log(`Is fruit.toLocaleLowerCase(fruit) === "Orange"? I predict false.`);
console.log(fruit.toLocaleLowerCase(fruit) === "Orange"); // false

// 5
let randomNumbers = [23,49,34,65,98,99,78];
console.log(`Is randomNumbers[2] !== 34|| randomNumbers[5] >= 90? I predict true.`);
console.log(randomNumbers[2] !== 34|| randomNumbers[5] >= 90); // true

// 6
console.log(`Is randomNumbers.length < 5 || randomNumbers.length !== 7? I predict false`);
console.log(randomNumbers.length < 5 || randomNumbers.length > 7); // false



