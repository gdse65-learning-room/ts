"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: 'John',
    address: 'USA'
};
console.log(user.name);
console.log(user.address);
// this line gives us an error, because ts always have static checking
// console.log(user.email);    //?
// -------------------------------------
var message = "Hello";
message();
// -------------------------------------
function flipCoins() {
    return Math.random < 0.5; // This is meant to Math.random()
}
// -------------------------------------
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date));
}
greet("John");
