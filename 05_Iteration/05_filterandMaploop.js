// Filter and Map 

/* const newCodingArrowArray=['JS','CPP','ruby','py','css']

const newVal=newCodingArrowArray.forEach( (arrowArryItem)=>{
    console.log(arrowArryItem);
})
 */

/* const newCodingNums=[1,2,3,4,5,6,7,8,9,0]

//const myNewnumber= newCodingNums.filter((Numitem)=> Numitem > 5 )
//console.log(myNewnumber); // ===> [ 6, 7, 8, 9 ]
const myNewnumber= newCodingNums.filter((Numitem)=> {
    return Numitem > 3
} )
console.log(myNewnumber); // ===> [ 4, 5, 6, 7, 8, 9 ] */

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //let userBooks=books.filter((myBook)=> myBook.publish>=2000)
  //console.log(userBooks);
/*
[
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]

*/
  let userBooks2=books.filter((myBook) => {return  myBook.genre==='History'})
  console.log(userBooks2);

  /*
    {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
  
  
  
  */