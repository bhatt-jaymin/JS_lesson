
// Declare String variable other way
const myAliasName= new String("Jay") // display as object in browser console

// ############# Different String Operations ####################

const myFirstAliasName= new String("Hello JS").substring(1,5)

const mySecondAliasName= myFirstAliasName.slice(-8,3)


//console.log(myFirstAliasName) ===> ello
//console.log(mySecondAliasName) ===> ell

// console.log(myAliasName) ===> [String: 'Jay']

//console.log(myAliasName[1]) ===> a
/* console.log(myAliasName.__proto__)// syntax of String prototype */



//console.log(myAliasName.length) ===> 3
//console.log(myAliasName.toUpperCase()) ===> JAY
//console.log(myAliasName.charAt(1)) ===> a
//console.log(myAliasName.indexOf('y')) ===> 2



//let myTrimStringOperation=new String("         Hello Java Script          ").trim()
//console.log(myTrimStringOperation) ===> Hello Java Script


/*const StringURL="https://movie-viewer.com/viewport20%rating"
 console.log(StringURL.replace('20%','-')) ===> https://movie-viewer.com/viewport-rating  


console.log(StringURL.includes('20%'))   ===> True
console.log(StringURL.includes('html'))  ===> False

*/



