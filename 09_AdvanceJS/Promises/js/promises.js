// Promises is object
// do an asny task
// DB task, Cryptograph task , Network call

const { response } = require("express");

// diffrent timecosumtion and connect in promises

const Promises1 = new Promise((reslove, reject) => {
  setTimeout(function () {
    console.log("Async Task is complete");
    reslove();
  }, 1000);
});
Promises1.then(function () {
  console.log("Promise consumed");
});

// concate timecosumtion and connect in promises

const promise2 = new Promise(function (reslove, reject) {
  setTimeout(function () {
    console.log("async Task Done");
    reslove();
  }, 1000);
}).then(function () {
  console.log("Async 2 done");
});

// Pass Message in Object in promises
const promise3 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve({ username: "jay", email: "test1@yopmail.com" });
  }, 1000);
});

promise3.then(function (userMsg) {
  console.log(userMsg);
});

// Pass Message in Object in promises
const promise4 = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "jay", pwd: "123456" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

promise4
  .then((usr) => {
    console.log(usr);
    return usr.username;
  })
  .then((Myusername) => {
    console.log(Myusername);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally((error) => {
    console.log("finally promise either resolved or rejected");
  });

// Pass Message in promises with asynchronization method
const promise5 = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ course: "javascrip", coursetype: "advance" });
    } else {
      reject("Error: javascript went wrong");
    }
  }, 1000);
});

 async function promiseConsumeFive() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

promiseConsumeFive();

// Pass Message in promises with asynchronization method with API

/*async function getAllUsers()  {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E:",error);
  }
};
getAllUsers();  */

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error)); 
