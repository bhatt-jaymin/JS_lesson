// for IN loop


// for In loop in obhect using map key

/*  const myNewGameObj={ 
    game1:'IGI',
    game2:'Mario',
    game3:'Need For Speed',
    game4:'GTA',
    game5:'Counter Strike'
}

for (const key in myNewGameObj) {
 console.log(myNewGameObj[key]);  
} */


/* const myNewGameArry=["IGI","Mario","NFS","GTA","CS","Contra"]

for (const key in myNewGameArry) {
    console.log(myNewGameArry[key]);
    
}
 */

// see example in console

/*  For Each with function

const newCodingArray=['JS','CPP','ruby','py','css']

newCodingArray.forEach( function (arryItem){
    console.log(arryItem);
}) */

//  For Each with Arrow function


/*const newCodingArrowArray=['JS','CPP','ruby','py','css']

//newCodingArrowArray.forEach( (arrowArryItem)=>{

newCodingArrowArray.forEach( (arrowArryItem,index,arr)=>{
    console.log(arrowArryItem,index,arr);
})



JS 0 [ 'JS', 'CPP', 'ruby', 'py', 'css' ]
CPP 1 [ 'JS', 'CPP', 'ruby', 'py', 'css' ]
ruby 2 [ 'JS', 'CPP', 'ruby', 'py', 'css' ]
py 3 [ 'JS', 'CPP', 'ruby', 'py', 'css' ]
css 4 [ 'JS', 'CPP', 'ruby', 'py', 'css' ]


*/


const myCodeForArry=[
    {
        languageName: "JavaScript",
        languageFileName:"JS",
        languageFormat:"Text"
    },

    {
        languageName: "Pascal",
        languageFileName:"PSS",
        languageFormat:"Assembly Language"
    },

    {
        languageName: "Shift",
        languageFileName:".shf",
        languageFormat:"XML"
    }
]

myCodeForArry.forEach((val)=>{
    console.log(val.languageName);
})