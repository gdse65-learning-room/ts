let user = {
    name: 'John',
    address: 'USA'
}

console.log(user.name);
console.log(user.address);

// this line gives us an error, because ts always have static checking
// console.log(user.email);    //?


// -------------------------------------

const message = "Hello";
message();

// -------------------------------------

function flipCoins() {
    return Math.random < 0.5;   // This is meant to Math.random()
}

// -------------------------------------

function greet(person, date) {
    console.log(`Hello ${person}, today is ${date}`);
}
greet("John");  // here is expected 2 arguments, but provide 1

// -------------------------------------

const isPass = (total) => {
    return total >= 50 ? true : false;
}
isPass(65);
isPass('Hi');   // Legal, but it's weird (impossible)



export {}