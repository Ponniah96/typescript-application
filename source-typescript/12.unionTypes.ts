console.log('12.Union Types');
console.log('Union Types allows users to assign variables or function parameters with multiple types');
console.log('eg: let EmployeeId: string | number');
let employeeId:string | number;
employeeId=1;
console.log(`Number EmployeeId: ${employeeId}`);
employeeId='1';
console.log(`String EmployeeId: ${employeeId}`);