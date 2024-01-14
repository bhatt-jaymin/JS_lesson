/* let myName='jay'
let truelength=myName.trim().length
console.log(truelength); */


let mySuperHeroes=["thor","spiderman","superman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",
    superman:"stealth body",

    getSpidyPower:function () {
        console.log(`Spidy Power is${this.spiderman}`);
    }
}


Object.prototype.jaimin= ()=>{

    console.log(`jaimin is available in every show`);
}

Array.prototype.heyjay=()=>{
    console.log(`Hey jay its JS demo`);
}

//heroPower.jaimin()  // Object prototype
mySuperHeroes.jaimin() // Object prototype
mySuperHeroes.heyjay() // Array prototype


// Inheritance

const teacher={
    makeVideo:true
}

const teacherAssistant={
    isAvailable:true
}

const taSupport={
    makeAssignment:'JS assignnment',
    fullTime:true
}

// Moder syntax of prototype

Object.setPrototypeOf(taSupport,teacher)


 let myName='jay     '


String.prototype.truelength=function () {
    console.log(`${this}`);
    //console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
}
//console.log(truelength); 

myName.truelength()