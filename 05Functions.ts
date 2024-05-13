// -----------------

// 1. parameter type annotation method
function greet(name: string) {
    console.log("hello " + name.toUpperCase());
}

// greet(43);  // Illegal, would be a runtime error if this executed
greet("Matheve");

// -----------------

// 2. return type annotation
function getRandomNumber(): number {
    return Math.random();
    // return "Hello";
    // return 10 > 5;
}


const data = (): number => {
    // return 'a';
    return 10;
}

const data2 = (): number => 10 + 10;

// -----------------

// 3. Annonymous functions
const marks: number[] = [10, 20, 30, 40, 50];

    // please give me a callaback function

marks.forEach(function (mark) {
    console.log(mark + ' -');   
});

console.log('-------------------------');


marks.forEach((mark) => {
    console.log(mark);
    
});

// -----------------

// 4. void type annotaion
function printInfo(): void {
    let name = 'Danuja';
    let age = 10;

    console.log(`My name is ${name}, and my age is ${age}`);

    // return '10'; // you cannot, because ths function is now has void type annotaion
}
printInfo();