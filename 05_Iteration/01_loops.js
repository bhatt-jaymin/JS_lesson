// for

/*
if inner loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i==5) {
        console.log(`${i} is middle number of series`);
    }
    console.log(i);
    
} */

/*
for inner loop

Table 

for (let i = 1; i <= 10; i++) {
    console.log(`Table :- ${i}`);
    for (let x = 1; x <= 10; x++) {
        const element = x;
        //console.log(`Inner loop ${x} and Inner loop ${i}`);
        console.log(i +'*'+ x + '='+i*x);
    }
}
*/

/* let myArray=["30","67","78","90"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
} */

// Break and Continue

/* for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log(`detect 5`);
        break;
    }
    console.log(`Value of i is ${index}`); */


    for (let index = 1; index <= 20; index++) {
        if (index==5) {
            console.log(`detect 5`);
            continue;
        }
        console.log(`Value of i is ${index}`);
    
    
}