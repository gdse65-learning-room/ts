// ---------------------------

let a= 10;     // type inference
console.log(a);


// a = 'hello'; // Illegal
// a = true;    // Illegal

// -------------------------------
let b: any= 10;     // any type annotaion
console.log(b);


b = 'hello';
b = true;