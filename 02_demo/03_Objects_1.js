
// Object Literals

const myNewSym=Symbol("myKey1")

const myNewObj={
    name:"Jaimin", // ===> key : Value
    [myNewSym]:"MyNewkey1",
    age:24,
    sex:"male",
    e_mail:"jai@info.com",
    state:"Goa",
    city:"Old Goa",
    pin_Code:560001,
    isActivated:true,
    isPremiumUser:false,
    isImageEnable:true,
    lastLoginAccess:["Monday","Thursday"]
}

/*

console.log(myNewObj.e_mail)    // jai@info.com
console.log(myNewObj["e_mail"]); // jai@info.com

*/


// Freeze object value

/*
console.log(myNewObj[myNewSym]);

myNewObj.e_mail="jaimin@gl.com"

Object.freeze(myNewObj)

myNewObj.e_mail="jaimin@yopmail.com"
*/
// ==================================================



// Adding function in object
myNewObj.Greting_Message =function(){
    console.log(`Hello Welcom ${this.name} User`);
}
console.log(myNewObj.Greting_Message());