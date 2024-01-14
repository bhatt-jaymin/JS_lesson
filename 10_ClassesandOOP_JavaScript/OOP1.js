//  Javascript and classes

// OOP

// Objects==> it'ss collection  properties and Methods
// to Lowercase

// Why Use OOP

/*
Parts of OOP

Object Literal

Constructor function

prototype

Classes

Instances [New and this keyword]


4 pillars of OOP

Abstraction
Polymorphism
Encapsulation
Inheritance

*/

/* const User={
    userName:"jaymin",
    LoginCount:8,
    SignIn:true,
    getUserDetails:function () {
        console.log(`get User details from Db`);
    }
}
console.log(User.getUserDetails()) */


function User(UserName,Password,isLoggedIn) {
    this.UserName=UserName;
    this.Password=Password;
    this.isLoggedIn=isLoggedIn

    return this
    
}

const userdetails1=new User('jaimin',123456,true) // new keyword create new instances and not to override in constructor function
const userdetails2=new User('Aayush',789012,false)
console.log(userdetails1.constructor);
//console.log(userdetails2);