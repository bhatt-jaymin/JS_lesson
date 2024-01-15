// ES6

class user{
    constructor(userName,email,password){
        this.userName=userName
        this.email=email
        this.password=password
    }
    encryptPassword(){
    return `${this.password}abc`
    }
    changeUserName(){
        return `${this.userName.toUpperCase()}`
        }
}


const jai=new user('abc','abc@yopmail.com','qa123')
console.log(jai.encryptPassword());
console.log(jai.changeUserName());


// Behind Scene

