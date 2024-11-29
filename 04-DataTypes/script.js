// String

const firstName = 'Sara';

// Number

const age = 30;
const temp = 98.9;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

// Symbol
const id = Symbol('id');

// BigInt
const n = 999999999999999999n;

//////// Reference Types

const numbers = [1, 2, 3, 4];

const person = {
    name: 'bob'
}

function sayHello(){
    console.log('Hello');
}

const output = sayHello;
console.log(output, typeof output);