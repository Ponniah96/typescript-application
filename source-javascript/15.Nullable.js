"use strict";
console.log('Nullable');
console.log('Typescript allows you to send or assign null data');
function nullData(name) {
    console.log(`Name:${name}`);
}
nullData('Ponniah');
nullData(null);
nullData(undefined);
