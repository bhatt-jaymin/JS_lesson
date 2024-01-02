// Filter and Map 2

const newCodingNums=[0,1,2,3,4,5,6,7,8,9,10]

/*let newNums=newCodingNums.map((num)=>num+10)
console.log(newNums);

[
  10, 11, 12, 13, 14,
  15, 16, 17, 18, 19,
  20
]*/

let newNums2=newCodingNums
            .map((num)=>num*10)
            .map((num)=>num+10)
            .filter((num)=>num>50)
console.log(newNums2); // [ 60, 70, 80, 90, 100, 110 ]