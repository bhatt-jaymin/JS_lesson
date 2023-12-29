// Functions

/* function myNewCalculatePrice(...num1){

    return num1
}


function myNewCalculatePrice2(val1,val2,...num1){

    return num1
}

console.log(myNewCalculatePrice(200,400,600,3000)); //[ 200, 400, 600, 3000 ]
console.log(myNewCalculatePrice2(200,400,600,3000)); //[ 600, 3000 ] val 1 and val2 assign first 2 value 
*/


// Passing Object into Functions

/* const user={
    customerName:"Jaymin",
    ProductPrice:500
}

function newObjectFunction(newObjectName){
console.log(`Customer ${newObjectName.customerName} your total bill is ${newObjectName.ProductPrice}`);
}

//1 st method
//newObjectFunction(user) // Customer Jaymin your total bill is 500

//2 nd method

newObjectFunction({
    customerName:"Vishnu",
    ProductPrice:900
}) */

// Passing Arrays into Functions

const newArrayFunction=[200,1000,4000,300,6000]

function myNewArrayFunction(newDemoArryFunction){
   return `here index of array value is ${newDemoArryFunction[3]}`
}

console.log(myNewArrayFunction(newArrayFunction));