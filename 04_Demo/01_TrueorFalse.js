//True value  If Statement

const isEmailavailable="bh@jay88@aol.com" //====> Email:- bh@jay88@aol.com is available

//const isEmailavailable="bh@jay88@aol.com" ==> Email is unavailable

if (isEmailavailable) {
    console.log(`Email:- ${isEmailavailable} is available` );
} else {
    console.log(`Email is unavailable`);
}


/*
Falsy Values

false,0,-0,bigint, on,"",null,undefined,NAN expect other are Truthy Values

Truthy Values

"0","falsy"," ",[],{},function(){}
*/

// Check array false value

const chkArrayFalsy=[]

if (chkArrayFalsy.length===0) {
    console.log(`Given Array is empty`);
}

// Check object false value

const chkObjectFalsy={}

if (Object.keys(chkObjectFalsy).length===0) {
    console.log(`Given Object is empty`);
}

// Nullish Coalescing Operator (??) // Null or Undefined

/* let val1;

//val1=5 ?? 10 ===> 5
//val1=null ?? 10 //===> 10

//val1=undefined ?? 15 //===> 15

console.log(val1);  */


// Turnary Operator ===> condition ? true :false

const isPriced=100

isPriced<=90 ? console.log(`${isPriced} lower than 80 rupess`) :console.log(`${isPriced} Higher than 80 rupees`);