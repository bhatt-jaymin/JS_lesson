const userId='093467';
let userEmail='devtest@yopmail.com'
var userPassword='123456'; 
accountCity='Surat';
let accountState;

// Not use var because issue in block scope and function scope
//function scope and block scope.


//userId=244; Not Allowed here
userEmail='dtest@gl.com';
userPassword='Admin_1234';
accountCity='Ahemdabad';

console.log(userId);

console.table([userId,userEmail,userPassword,accountState,accountCity]); // display variable in tabular form