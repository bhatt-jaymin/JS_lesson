// for IN loop


// for In loop in obhect using map key

 const myNewGameObj={ 
    game1:'IGI',
    game2:'Mario',
    game3:'Need For Speed',
    game4:'GTA',
    game5:'Counter Strike'
}

for (const key in myNewGameObj) {
 console.log(myNewGameObj[key]);  
}