"use strict";
console.log('11.type Alias');
console.log('type Alias is a concept where we declare our won custom objects and reused wherever we want');
console.log('we have to use type keyword along with custom object name');
const Employee1 = {
    id: 1,
    name: 'Ponniah',
    Role: 'Associate Architect III',
    workingStatus: true
};
const Employee2 = {
    id: 2,
    name: 'Ponniah',
    Role: 'Technical Architect III',
    workingStatus: true
};
console.log(`Employee Details 1 Employee Id: ${Employee1.id}, Employee Name: ${Employee1.name}, Employee Role:${Employee1.Role} `);
console.log(`Employee Details 2 Employee Id: ${Employee2.id}, Employee Name: ${Employee2.name}, Employee Role:${Employee2.Role} `);
