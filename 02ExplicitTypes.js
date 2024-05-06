// ---------------------
function isPass(total) {
    return total >= 75 ? true : false;
}
isPass(57);
isPass(75.5);
/*
isPass('Hi');
isPass(true);
*/
// ---------------------
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date));
}
// greet(10, 'hi');
greet('Steve', new Date());
