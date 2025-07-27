let userName = prompt('Please enter your name: ');
let userAge = prompt('Please enter your age: ');
let currentYear = new Date().getFullYear();
let yearOfBirth = currentYear - userAge;
alert(`${userName} was born in ${yearOfBirth}`);