console.log('13.Intersection');
console.log('Intersection makes possible single variable can assign multiple data types at same time');
console.log('Eg: let variableName: string & Number');

type variableA={
    value1:string
}

type variableB={
    value2:Number
}

type intersectionVariable= variableA & variableB;

let intersectionVariables:intersectionVariable={
    value1:'1',
    value2:1,
}

console.log('Intersection Values: ', intersectionVariables);