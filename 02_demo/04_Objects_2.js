// Singleton
// Object.Create

//const myNewAssignValueObj=new Object() // singleton Object


const myNewObj={
    name:"Jaimin", // ===> key : Value
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

let myNewNonAssignValueObj={} //Non Singleton Object

/**/

/**/

/**/

/**/

/**/

myNewNonAssignValueObj.id="abc090E23"
myNewNonAssignValueObj.name="Ricky"
myNewNonAssignValueObj.loggedIn=true

//console.log(myNewNonAssignValueObj);

const myNewRegsterUser={
    email:"sammy99@gmail.com",
    FullName:{
        firstName:"jay",
        lastName:"shah",
        middleName:"vinaybhai",
        stream:{
            School:"Science",
            College:"Micro-Biology",
            Master:"MCA",
        }
    }
}



/*
console.log(myNewRegsterUser.FullName);

{
  firstName: 'jay',
  lastName: 'shah',
  middleName: 'vinaybhai',
  stream: { School: 'Science', College: 'Micro-Biology', Master: 'MCA' }
}

console.log(myNewRegsterUser.FullName.stream);

{ School: 'Science', College: 'Micro-Biology', Master: 'MCA' }

console.log(myNewRegsterUser.FullName.stream.Master);
MCA

*/

/*
Merge Object

let obj1={a:"1",b:"2",}
let obj2={c:"3",d:"4"}


console.log({obj1,obj2})  // { obj1: { a: '1', b: '2' }, obj2: { c: '3', d: '4' } }
console.log({...obj1,...obj2}) // { a: '1', b: '2', c: '3', d: '4' }
console.log(Object.assign({},obj1,obj2)); //{ a: '1', b: '2', c: '3', d: '4' }


*/


/*
console.log(Object.keys(myNewObj));
console.log(Object.values(myNewObj));
console.log(Object.entries(myNewObj));

[
  'name',
  'age',
  'sex',
  'e_mail',
  'state',
  'city',
  'pin_Code',
  'isActivated',
  'isPremiumUser',
  'isImageEnable',
  'lastLoginAccess'
]


console.log(myNewObj.hasOwnProperty("name"));// check property is available or not
*/

console.log(myNewObj.hasOwnProperty("name"));