interface Vehicle {
    horn(): void;
}

class OldCar {
    constructor() {
        console.log('Invoking super class constructor!');
    }
    go(): string {
        return 'old car is going';
    }
}

class NewCar extends OldCar implements Vehicle {
    constructor() {
        super()
    }
    horn(): void {
        console.log('new car is pooomp poomp!');
    }
    go(): string {
        return 'new car is going'
    }
}

let newcar = new NewCar();
console.log(newcar.go());   // method overriding
newcar.horn();
