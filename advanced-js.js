// 

//Spread Operator
// const arr1 = [1, 2, 3, 4, 5, 6];
// const arr2 = [7, 8, 9, 0];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

//Rest Operator
function sum(...number){
    return number.reduce((total, num) => total + num, 0);
}

let result = sum(1, 2, 3, 4, 5);

console.log(result);