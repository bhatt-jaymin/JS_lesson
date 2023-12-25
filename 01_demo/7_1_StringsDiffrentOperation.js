
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


================Deleted in build String Function===================
String.anchor()
String.big()
String.bold()
String.blink()
String.fixed()
String.fontsize()
String.fontcolor()
String.italics()
String.link()


*/
let words=new String("Hello JS Community JS is popular in web devloping")


let idx =-1
let idx2 =7

let word_a='WORD'
let word_b='word'

let cardNumber='90907856709';
let printCardNumber=cardNumber.slice(-4); // Always put initialize variable in String type
let encryptCardNumber=printCardNumber.padStart(cardNumber.length,'*');



let serchword='JS'
let serchStringWords=words.indexOf(serchword)
let serchLastStringWords=words.lastIndexOf(serchword)



/* 
let repeatWord=' everywhere '
console.log(`here ${repeatWord.repeat(3)}`) ===> here  everywhere  everywhere  everywhere 
*/

//console.log(`Here compare of ${word_a.localeCompare(word_b)}`) ===> Here compare of 1

// console.log(encryptCardNumber) ===> *******6709

/*
console.log(`Is given character ends with ${words.endsWith('Community',18)}`) ==> Is given character ends with true
console.log(`Is given character ends with ${words.endsWith('Community')}`) ==> Is given character ends with true
*/

//console.log(`concate 2 different string is${words.concat (idx2)}`) ===> concate 2 different string is Hello JS Community 7
/*
//console.log(`hello its my ${words.at(idx)} for everyone checking index of given words `)  ===> hello its my i for everyone checking index of given words
//console.log(`hello its my ${words.at(idx2)} for everyone checking index of given words `) ===> hello its my s for everyone checking index of given words




*/

// console.log(`hello its my ${words.charAt(idx)} for everyone checking index of given words `)  ===> hello its my[Blank space display if user set negative value] for everyone checking index of given words
// console.log(`hello its my ${words.charAt(idx2)} for everyone checking index of given words `)   ===> hello its my s for everyone checking index of given words

// console.log(`hello its checking UTI-16 code of ${words.charCodeAt(idx2)}  index given of words is ${words.charAt(idx2)}`)   ===> hello its checking UTI-16 code of 83  index given of words is S


/*
console.log(`hello its checking  ${serchword} word position at ${serchStringWords} `)   ===>  hello its checking  JS word position at 6 
console.log(`hello its checking  ${serchword} word position at ${words.indexOf(serchword,serchStringWords+1)} `)   ===> hello its checking  JS word position at 19

console.log(`hello its checking  ${serchword} last word position at ${serchLastStringWords}`)  ===> ===> hello its checking  JS word position at 19

===> indexOf inbuilt String function case sensitive

===> lastindexOf inbuilt String function case sensitive

*/

//isWellFormed() --> check UTF-16 String available or not in URl or any String return boolean value
// Match & Match All : ---> Check and Compare Regex in String 
// Normalize :--> Value return Unicode Normalize

//console.log(`here ${word_a.padEnd(12,'.')}`) ===> here WORD........
