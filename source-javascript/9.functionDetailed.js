"use strict";
console.log('9.Functions');
console.log('Using TypeScript in functions we can overcome below issues in compiler');
console.log('Identify Unused Parameters, Unused Locals, Implicit returns');
function Calculation(value1, value2) {
    if (value1 > value2)
        return value1 - value2;
    return value1 + value2;
}
Calculation(5, 3);
