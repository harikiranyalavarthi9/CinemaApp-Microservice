import sub, { square as sq, add } from './utils.js';
import isSenior, { isAdult, canDrink } from './person';

import validator from 'validator';

console.log("Example.js is running!");
console.log(sq(4));
console.log(add(2,3));
console.log(sub(100,99));
console.log(isAdult(19));
console.log(canDrink(20));
console.log(isSenior(68));

console.log(validator.isEmail('test@gmail.com'));