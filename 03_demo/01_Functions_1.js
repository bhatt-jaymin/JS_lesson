// Functions

/*
function myFirstFunction(){ // Create function
    console.log("A");
    console.log("E");
    console.log("I");
    console.log("O");
    console.log("U");
}

myFirstFunction() //calling function

O/P

A
E
I
O
U

*/

/*Method1

function myAddition(num1,num2){ // Parameters

    console.log(num1+num2); 
}

const result= myAddition(10,20) // Argumnet(10,20)

30
*/

/*Method2

function myAddition(num1,num2){

    let result=num1+num2; 
    return result
}

const result= myAddition(10,20)
console.log(`Result : ${result}`);

30
*/

/*Method3

function myAddition(num1,num2){

    return  num1+num2
}

const result= myAddition(10,20)
console.log(`Result : ${result}`);

30
*/

/*Method4

function loginMessage(userLoggedIn){

    return  `${userLoggedIn} logged In`
}

console.log(loginMessage("Jaimin"));

Jaimin logged In

*/

/*Method4

function loginMessage(userLoggedIn){
    if(!userLoggedIn){
        console.log("Please enter valid Username");
        return
    }

    return  `${userLoggedIn} logged In`
}

console.log(loginMessage(""));

Please enter valid Username

*/
function loginMessage(userLoggedIn = "Guest") {
  if (!userLoggedIn) {
    console.log("Please enter valid Username");
    return
  }

  return `${userLoggedIn} User logged In`;
}

console.log(loginMessage());
