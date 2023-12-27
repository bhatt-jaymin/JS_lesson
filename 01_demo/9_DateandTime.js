let myDate=new Date()
//console.log(myDate.toString()) ===> Tue Dec 26 2023 22:19:37 GMT+0530 (India Standard Time)

// console.log(myDate.toISOString()) ===> 2023-12-26T16:50:56.526Z

// console.log(myDate.toDateString()) ===> Tue Dec 26 2023

//console.log(myDate.toLocaleDateString()) ===> 12/26/2023

//console.log(myDate.toUTCString())  ===> Tue, 26 Dec 2023 16:52:41 GMT

// console.log(myDate.toLocaleString())  ===> 12/26/2023, 10:23:17 PM

//console.log(myDate.toLocaleTimeString()) ===> 10:24:18 PM

// console.log(myDate.toJSON()) ===> 2023-12-26T16:54:42.394Z

// console.log(myDate.getTimezoneOffset()) ===> -330

// console.log(typeof myDate) // Object

/*

let myCreateNewDate=new Date(2025,1,29)
console.log(myCreateNewDate.toDateString()) // format date [Sat Mar 01 2025]


let myCreateNewDate=Date.now()
console.log(myCreateNewDate); //1703649524202 millisecond display

let myCreateNewDate=Date.now()
console.log(Math.floor(myCreateNewDate/1000)); 

*/


let myCreateNewDate=Date.now()
console.log(Math.floor(myCreateNewDate/1000)); 
