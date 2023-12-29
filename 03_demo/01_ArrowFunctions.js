// Arrow Functions

const user={
        userName:"jay@gl.com",
        price:1999,

        welcomeMessage: function(){
        console.log(`${this.userName} , welcome to website`);
        //console.log(this)
    }
}
/* user.welcomeMessage()
user.userName="sam@gl.com"
user.welcomeMessage()


jay@gl.com , welcome to website
{
  userName: 'jay@gl.com',
  price: 1999,
  welcomeMessage: [Function: welcomeMessage]
}
sam@gl.com , welcome to website
{
  userName: 'sam@gl.com',
  price: 1999,
  welcomeMessage: [Function: welcomeMessage]
}

*/

/* function myJSFunction(){
console.log(this)
}

myJSFunction() */

//Arrow Functiom


/* const myFirstArrowFunction = () => {
    let UserAliasname="Joseph"
    console.log(this)
    }
    
    myFirstArrowFunction() */

/*     const myFirstArrowFunction = (num1,num2) => {
        return num1+num2
        }
        
        console.log(myFirstArrowFunction(50,60)); */

//Implicit Arrow Method
        const myFirstArrowFunction = (num1,num2) =>  (num1+num2) //or num1,num2

        const myFirstArrowFunction2 = (num1,num2) =>  ({name:"jay"})

        console.log(myFirstArrowFunction2(50,60));
        console.log(myFirstArrowFunction(50,60));