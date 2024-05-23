
let person = {
    name: 'Mosh',
    age: 30
};

// dot notation
person.name = 'Jhon';

let selection = 'name';
person[selection] = 'Mary';
console.log(person.name);