//1 = 00000001
//2 = 000000010
//3 = 00000011


//read, write, Execute
//00000100
//00000110
//00000111

console.log(1 | 2); //Bitwise OR
console.log(1 & 2); //Bitwise AND

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission |  writePermission | executePermission

let message = (myPermission & readPermission)
 ? 'yes' : 'no';

 console.log(message);