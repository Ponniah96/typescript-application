console.log('8.Enums');
console.log('Enums contains list of constants along with values');
enum TShirtSize {Small=36, Medium=38, Large=40};
let small=TShirtSize.Small;
let medium = TShirtSize.Medium;
let large = TShirtSize.Large;
console.log(`Small Size: ${small}, Medium Size: ${medium}, Large Size: ${large}`);