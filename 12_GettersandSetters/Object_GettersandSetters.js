const User = {
  _email: "tyqad@yopmail.com",
  _password: "tyQAD345!",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};


const demo=Object.create(User)
console.log(demo.email);