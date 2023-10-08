//obeject literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Nasir",
    [mySym]: "my symbol_",
    age: 12,
    location: "lahore",
    email: "ahmed@hotmail.com",
    idLoggedIn: true
}

// console.log(jsUser['name']);
// console.log(jsUser.name);
// console.log(jsUser[mySym])
// console.log(jsUser.email)


// jsUser.email = "nasir@mail.com"
// console.log(jsUser.email)
// Object.freeze(jsUser)
// jsUser.email = "yasmin@mail.com"
// console.log(jsUser.email)
// console.log(jsUser);

jsUser.greeting = function (){
    console.log("Hello js developer");
}

jsUser.greetingTwo = function (){
    console.log(`Hello js developer, ${this.location}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
