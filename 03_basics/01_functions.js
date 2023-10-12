// function addTwoNumbers(number1, number2) {
//     let result = number1 + number2
//     return result
// }

// const result = addTwoNumbers(2, 66)
// console.log(result);


function loginUser(username){
    if (!username) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUser(""))



const myArray = [2,55,79,0]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArray));