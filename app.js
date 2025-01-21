"use strict";
var _a;
let names = 'hey'; //explicit typing
let random = 'hello'; //implicit typing    
var arr = [1, 2, 3, 5, 'a'];
const tuple = [1, 2, 'string'];
console.log(tuple[2]);
const test = [[1, '2'], [1, "4"]];
test[0][0];
//literals and enums
let data = 'north';
let direction; //this is literals
direction = 'north';
//enums
var Size;
(function (Size) {
    Size[Size["Small"] = 10] = "Small";
    Size[Size["Medium"] = 0] = "Medium";
    Size[Size["Large"] = 1] = "Large";
    Size[Size["Big"] = 2] = "Big";
})(Size || (Size = {}));
let size = Size.Small;
console.log(size);
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 0] = "South";
    Direction[Direction["East"] = 1] = "East";
    Direction["West"] = "west";
})(Direction || (Direction = {}));
var dir = Direction.East;
console.log(dir);
//any, unknown, typecase
let anytype = 's'; //there wont be any type checking
console.log(anytype + 1);
let unkknown = [[10]]; //assert/check the type before perfoming any operation on it
// if(typeof unkknown === 'string'){
//     console.log(unkknown.length)
// }else{
//     console.log('its snumb')
// }
console.log(unkknown.length, 'length'); //type casting
console.log(unkknown + 1, 'a'); //type casting
console.log(unkknown[0][0]); //type casting
//optional chaining and bang
const names1 = [{ name: 'ameen' }, { name: 'ans' }, { name1: 'amiz' }];
const tx = (_a = names1.pop().name) === null || _a === void 0 ? void 0 : _a.length;
console.log(tx);
//function types
function sum(x, y) {
    return x + y;
}
function naming(firstName, lastName, middleName = 'defaulr') {
    return firstName + middleName + lastName;
}
function callFunction(func, fname, lname, mname) {
    console.log(fname, lname, mname, 'alsdf');
    console.log(func(fname, lname, mname));
}
callFunction(naming, 'ameen', 'dv', 'haha');
