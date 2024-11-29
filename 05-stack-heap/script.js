// Values are stored on the stack
const name = 'John';
const age = 30;

const person = {
    name: 'brad',
    age: 40,
};

let newName = name;
newName = 'Johnathan';

let newPerson = person;
newPerson.name = 'bobby';

console.log(name, newName);
console.log(person, newPerson);