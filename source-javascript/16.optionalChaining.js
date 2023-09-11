"use strict";
console.log('16.Optional Chaining');
console.log('Optional Chaining helps us to overcome whether elements or function either having null or undefined or overcome problems');
console.log('Using ? operator we can overcome this issue');
let data;
let dataLength = data === null || data === void 0 ? void 0 : data.length;
console.log(`Data length: ${dataLength}`);
let array1 = [];
let arrayLength = array1 === null || array1 === void 0 ? void 0 : array1.length;
console.log(`Array Length: ${arrayLength}`);
