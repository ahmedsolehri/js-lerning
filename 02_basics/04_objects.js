const tinderUser = new Object()

tinderUser.id = "1231bc"
tinderUser.name = "Ahmed"
tinderUser.idLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            fulname: "Ahmed",
            lastname: "Nasir"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);


const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" }

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);