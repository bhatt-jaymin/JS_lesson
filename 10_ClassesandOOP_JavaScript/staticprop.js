class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`UserName : ${this.username}`);
    }
    createId(){
        return '123'
    }
}


const jay=new User('hitesh')
//console.log(jay.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
        
    }
}

const apple=new Teacher('IPhone','appleser4i@apple.com')
//apple.logMe()
console.log(apple.createId());