
let personName1: string = "muhammad hamza aamir"

console.log(personName1.toLowerCase())
console.log(personName1.toUpperCase())


let name: string[] = personName1.split(" ");
let titleCase: string = " "

for (let a=0; a<name.length; a++) {
   titleCase +=name[a].charAt(0).toUpperCase() +name[a].slice(1).toLowerCase()+" "
};

console.log(titleCase);
 



