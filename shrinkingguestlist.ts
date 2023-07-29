let guestList2: string[] = ["Saad","Ibrahim","Wasif","Saleh","Omer"]

console.log(`Sorry, the dinner table won't arrive in time, and I can only invite two people for dinner.`)

 for (let a=2; a<guestList2.length; a++) {
    console.log(`Sorry, ${guestList2[a]} I can't invite you to dinner`)
    }

    guestList2.splice(2,5)

    console.log(`You're still invited, ${guestList2[0]} and ${guestList2[1]}.`);
    guestList2.pop();
    guestList2.pop();

console.log("Guest list is ",guestList2)


