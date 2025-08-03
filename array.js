let num =[1, 2, 3, 4, 5];
num.push(6);
num.shift();
console.log(num);

function filterEvenNumbers(...number){
    let evenNumbers = [];
    number.forEach(num => {
        if (num % 2 === 0){
            evenNumbers.push(num);
        }
    })

    return evenNumbers;
}

console.log(filterEvenNumbers(15, 24, 78, 97, 101, 65));
