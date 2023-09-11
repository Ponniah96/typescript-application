console.log('Nullable');
console.log('Typescript allows you to send or assign null data');
function nullData(name:string | null | undefined){
    console.log(`Name:${name}`);
}
nullData('Ponniah');
nullData(null);
nullData(undefined);