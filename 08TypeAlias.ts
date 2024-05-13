// without using type alias

let box = {
    height: 10,
    width: 20,
    length: 30
}

function findBoxArea(box: {height: number, width: number, length: number}) {
    // find area logic should be here
}

function findBoxVolume(box: {height: number, width: number, length: number}) {
    // find volume logic should be here
}

findBoxArea(box);
findBoxVolume(box);

// -------------------------


// create an alias called Box
type Box = {
    height: number;
    width: number;
    length: number;
}

let box2 = {
    height: 10,
    width: 20,
    length: 30
}

function findBoxArea2(box: Box) {
    // find area logic should be here
}

function findBoxVolume2(box: Box) {
    // find volume logic should be here
}

findBoxArea2(box2);
findBoxVolume2(box2);


// --------------------------------

type ID = number | string;
function print2(id: ID) {
    //
}

print(10);
print('10');
// print(true);    //Illegal