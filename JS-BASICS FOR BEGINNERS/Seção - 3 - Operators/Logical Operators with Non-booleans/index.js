let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan);
let applicationRefused = !eligibleForLoan; 
console.log('Application Refused', applicationRefused);

//Parte 2 - Logical Operators

//false || true = true
//false || 'Mosh' = 'Mosh'
//false || 1 = 1

//Falsy
//undefined
//null
//0
//false
//''
//NaN


// Anything that is not Falsy -> Truthy

let userColor = undefined;
let defaultColor = 'pink';
let currentColor = userColor || defaultColor;

console.log(currentColor);