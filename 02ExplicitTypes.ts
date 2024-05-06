// ---------------------

function isPass(total: number) {
    return total >= 75 ? true : false;
}
isPass(57);
isPass(75.5);

/*
isPass('Hi');
isPass(true);
*/

// ---------------------

function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date}`);
}
// greet(10, 'hi');
//greet(true, 'hello');  
greet('Steve', new Date());

// ---------------------

// Type inference
var x = 10; // now onward x's type is number
console.log(x);

x = 'hello';    //Illegal, no more playing

// ---------------------
// type annotation
let message: string = 'Hello! Good morning!'
message = 'd';  // Legal
message = 10;   // Illegal