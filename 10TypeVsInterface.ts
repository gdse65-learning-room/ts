type Vehicle = {
    model: string
}
interface Animal {
    name: string
}

// --------------------------------------------

// Extendability -> both have extendability

interface Dog extends Animal {
    weight: number
}

type Car = Vehicle & {
    topSpeed: number
}

// --------------------------------------------

// Adding properties to an existing 

interface Human {
    id: number
}
interface Human {
    name: string
}

/////
type Love = {
    shape: string
}

/*type Love = {   // Illegal; duplicate Identifires
    duration: number
}
*/