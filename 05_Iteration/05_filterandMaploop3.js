//reduce Filter and Map 3

const newCodingNums=[0,1,2,3,4,5,6,7,8,9,10]

/* const newCodingNumsTotal=newCodingNums.reduce
                        (function(accu,curval) {
                        console.log(`Accurate Val:- ${accu} and Current Value :- ${curval}`);
                        return accu + curval
} ,0) 

Accurate Val:- 0 and Current Value :- 0
Accurate Val:- 0 and Current Value :- 1
Accurate Val:- 1 and Current Value :- 2
Accurate Val:- 3 and Current Value :- 3
Accurate Val:- 6 and Current Value :- 4
Accurate Val:- 10 and Current Value :- 5
Accurate Val:- 15 and Current Value :- 6
Accurate Val:- 21 and Current Value :- 7
Accurate Val:- 28 and Current Value :- 8
Accurate Val:- 36 and Current Value :- 9
Accurate Val:- 45 and Current Value :- 10
55

*/


/* const newCodingNumsTotal=newCodingNums.reduce
                        ((accu,curval) =>{
                        console.log(`Accurate Val:- ${accu} and Current Value :- ${curval}`);
                        return accu + curval
} ,0)

console.log(newCodingNumsTotal); //55 */


const shoppingCart = [
  {
   title: 'Java', 
   Price: 2999 
  },
 
  {
    title: 'Python', 
    Price: 4999 
   },

   {
    title: 'Mobile Devlopment', 
    Price: 6999 
   },
   {
    title: 'Ruby', 
    Price: 109999 
   },
   {
    title: 'Data Science', 
    Price: 14999 
   },
]

const myshoppingCart=shoppingCart.reduce((accu,itm)=>accu+itm.Price,0)
console.log((myshoppingCart.toFixed(2)));
