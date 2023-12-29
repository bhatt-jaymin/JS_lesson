//Scope

let a=300  // Global scope
if(true)
{  // using anotation,function,loop statement using Scope
// Block Scope
    let a=10
    const b=20
  console.log(`inner scope: ${a}`)


} 

console.log(`Global Scope : ${a}`);