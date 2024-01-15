// Inheritance

class User {
  constructor(userName, Password, isActive) {
    this.userName = userName;
    this.Password = Password;
    this.isActive = isActive;
  }
  logMe() {
    console.log(`User Name Is ${this.userName}`);
    console.log(`Password Is ${this.Password}`);
    console.log(`Status Is ${this.isActive}`);
  }
}

class Teacher extends User {
  constructor(userName, email, Password) {
    super(userName,Password);
    this.email = email;
   
  }
  addCourse() {
    console.log(`New Course Add by ${this.userName}`);
  }
}

const dispData = new Teacher("XYZ123456", "ABC@yopmail.com", "123456");
dispData.addCourse();
const aliasName=new User('AliasName')

aliasName.logMe()

console.log(dispData===Teacher);