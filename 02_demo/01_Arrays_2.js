// Array Detail concept

let myFirstArray=[0,3,5,7,9]
let mySecondArray=[0,13,15,17,19]

/* concate first array to Second array

myFirstArray.push(mySecondArray)
console.log(myFirstArray); // [ 0, 3, 5, 7, 9, [ 0, 13, 15, 17, 19 ] ]


console.log(myFirstArray.concat(mySecondArray));

console.log([...myFirstArray,...mySecondArray]); // Spread method concate multiple array other cocate method

above 2 spread and cocate methods o/p display same
[
  0,  3,  5,  7,  9,
  0, 13, 15, 17, 19
]

const myAnotherArray=[2,4,7,[9,7,5],8,[2,7]];
const myNewAnotherArray=myAnotherArray.flat(Infinity);
console.log(myNewAnotherArray); // create new array in single array

[
  2, 4, 7, 9, 7,
  5, 8, 2, 7
]

console.log(Array.isArray("Jaimin"));===> False // check array available or not

console.log(Array.from("Jaimin"));===> [ 'J', 'a', 'i', 'm', 'i', 'n' ] //Adding new array

console.log(Array.from({name:"jaimin"}));[]  // Interesting Array is not define  
*/


console.log(Array.from({name:"jaimin"}));