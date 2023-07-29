
//1 
function make_shirt (size_1:string,message_1:string,size_2:string,message_2:string) {
    console.log(`Size: ${size_1}\nMessage: ${message_1}`)
    console.log(`Size: ${size_2}\nMessage: ${message_2}`)
}
make_shirt("Large","'I love Typescript'","Medium","'Hard work is the key to success'")


//2 

function make_shirt2 (size_1:string="Large",message_1:string="'I love Typescript'",) {
    console.log(`Size: ${size_1}\nMessage: ${message_1}`)
  }
make_shirt2();

make_shirt2("Medium","'Hard work is the key to success'");

