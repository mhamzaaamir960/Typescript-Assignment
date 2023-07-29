


let guestList2: string[] = ["Saad","Ibrahim","Saleh"]


console.log(`Guest who cannot make the dinner is ${guestList2[2]}.`)

let newGuest = guestList2.splice(2,1,"Wasif")


console.log(`New guest is Wasif`)
console.log(`New guest list is ${guestList2}`)


for (let a=0; a<guestList2.length; a++) {
    console.log(`Hi ${guestList2[a]}, Hope you doing well!`)
}
 






 