/*
what is Java Script

==> its versatille and widely used Prog. language that play crucial role in web devlopment 
==> it enable devlop create interactive anddynamic elements within web pages,
==> its enhancing the User exp. by adding functionality that respond to user actions
==> js is primary execute in web browser but its also used in other environment like server side scripting (Node.js)

*/

const country='India'
const continent='Asia'
let population=150
const isLand=true
let language='Hindi'


/* Ans 1
console.log(country);
console.log(continent);
console.log(population,'Billion'); */




/* Ans 2
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isLand);
console.log(typeof language); */


/* Ans 3 
console.log(country);
console.log(continent);
console.log(population);
console.log(isLand);
console.log(language); */


population /=2
console.log(population);


population++
console.log(population);

console.log(population >=6 ? 'more population' :'less population');
console.log(population >=33 ? true :false);

let description=`${country} is in ${continent}, and its ${population} billion people and allmost they speak ${language}` 
console.log(description);

