// Primitive [Refrence] Datatypes
/* 
1 symbol
2 String
3 BigInt
4 null
5 number
6 Boolean
7 undefined 
*/

//Non Primitive [Refrence] Datatypes
/* 
1 Array
2 Object
3 Function
*/

// JavaScript is a dynamically typed language

/* const userId='093467';
const userEmail='devtest@yopmail.com'
const userPassword='123456'; 
let accountCity='Surat';
let accountState; */

//Symbol primitive datatype example

const id=Symbol("123")
const anotherId=Symbol("456")

console.log(id===anotherId) // ===> false

//BigInt example

const bigNumber=3409865409785687569034098654097856875690n

console.log(typeof bigNumber) //bigint primitive type


//========Non Primitive========

let myItemData=["lemon","Apple","Potatoes","PineApple"]
let myobjData=
{
name:"XYZ",
city:"pqr",
}

const myFunctionObjName=function(){
    console.log("Hello World")
}