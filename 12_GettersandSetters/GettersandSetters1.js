class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(values){
        this._email=values.toUpperCase()
    }


    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password=value.toUpperCase()
    }
}

const jai=new User('adc@yopmail.com','abcxyz')
console.log(jai.password);
console.log(jai.email);
