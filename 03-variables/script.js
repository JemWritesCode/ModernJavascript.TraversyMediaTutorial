let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

let age = 30;

console.log(age);

// Re-assigning variables

age = 31;

console.log(age);

let score;

score = 1;
console.log(score);
if (true){
    score = score + 1;
}

console.log(score);

const x = 100;

// this will give a runtime error
// x = 200; 

const arr = [1,2,3,4];
arr.push(5);
console.log("array " + arr);

const person = {
    name: 'Brad',
};

person.name = 'John';
person.email = 'john@email.com';

console.log(person);

// Declare multiple values at once

let a, b, c;

const d = 10, e = 20, f = 30;

console.log(d);
console.log(a); // undefined