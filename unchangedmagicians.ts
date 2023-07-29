

function magicians(){
    let magicians_names: string[] = ["Harry","Alice","John","Smith"]
    for (let a=0; a<magicians_names.length; a++) {
        console.log(`${magicians_names[a]}`)
    }
}
console.log("Original Magicians: ")
magicians();


function make_great(){
    let magicians_names: string[] = ["Harry","Alice","John","Smith"]
    for (let a=0; a<magicians_names.length; a++) {
        console.log(`The Great ${magicians_names[a]}`)
    }
}
console.log("Great Magicians: ")
make_great();

