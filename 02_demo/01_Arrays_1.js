// Array

let myFirstArray=[0,3,5,7,9]
let newArray=[0,13,15,17,19]

//console.log(myFirstArray[3]); // check which element in particular position [7]

//console.log(myFirstArray.length) // check length of the array 5


/* Array PUSH Method

console.log(myFirstArray.push(19));

console.log(myFirstArray) // Add value in last position

*/


/* Array POP Method

console.log(myFirstArray.pop()); //Remove Last Array Element
console.log(myFirstArray);

[ 0, 3, 5, 7 ]

*/

/* Array UnShift Method 

console.log(myFirstArray.unshift(15)); //Add Array Element in First Position
console.log(myFirstArray);

6
[ 15, 0, 3, 5, 7, 9 ]

*/


/* Array Shift Method 

console.log(myFirstArray.shift()); // Remove First Array Element
console.log(myFirstArray);

0
[ 3, 5, 7, 9 ]

*/


/* Array Includes Method ===> Check Array Element Exist or not

console.log(myFirstArray.includes(5)); ====> true 

console.log(myFirstArray.includes(85)); ===> false

*/


/* Array Indexof Method ===> Check Array Element Position if not -1 display

console.log(myFirstArray.indexOf(5)); ====> 2

console.log(myFirstArray.indexOf(25)); ===> -1

*/


/* Array Join Method ===> Convert Array object type into String

console.log(newArray.join()) // convert Array into String

0,13,15,17,19

*/


// Slice and Splice

console.log("A ",myFirstArray);
let A1=myFirstArray.slice(1,4)
console.log(A1);


console.log("B ",myFirstArray);
let B1=myFirstArray.splice(0,2)

console.log("C ",myFirstArray);
console.log(B1);

