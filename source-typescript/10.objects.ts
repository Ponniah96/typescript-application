console.log('10.Objects');
console.log('Similar to JavaScript Objects we can initiate typescript objects');
console.log('But we have to define properties type before you initiate object');
let employee : {readonly id:number,names:string, Role:string, workingStatus?:boolean}={id:1,names:'Ponniah', Role:'Associate Architect III'};
employee.workingStatus=true;
console.log(`Employee Id: ${employee.id}, Employee Name: ${employee.names}`);