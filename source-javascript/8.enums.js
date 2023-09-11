"use strict";
console.log('8.Enums');
console.log('Enums contains list of constants along with values');
var TShirtSize;
(function (TShirtSize) {
    TShirtSize[TShirtSize["Small"] = 36] = "Small";
    TShirtSize[TShirtSize["Medium"] = 38] = "Medium";
    TShirtSize[TShirtSize["Large"] = 40] = "Large";
})(TShirtSize || (TShirtSize = {}));
;
let small = TShirtSize.Small;
let medium = TShirtSize.Medium;
let large = TShirtSize.Large;
console.log(`Small Size: ${small}, Medium Size: ${medium}, Large Size: ${large}`);
