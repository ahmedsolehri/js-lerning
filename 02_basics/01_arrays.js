// const myArr = [0,0,0,67,7,9]
// const myArr1 = [ 'ahmed', 'umer']

// const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr2[2]);

// myArr2.push(0)
// console.log(myArr2);


// // console.log(myArr2.includes(0));
// console.log(myArr2.indexOf(2));


const myArr3 = new Array(1,2,3,4,5,6,7,8,9,0)

const myAr1 = myArr3.slice(1,5)
console.log(myAr1);

const mySpliceArr = myArr3.splice(1,5)
console.log("original myArr3", myArr3);
console.log(mySpliceArr);