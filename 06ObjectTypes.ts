

function printUser(user: { id: number; name: string}) {  // should be pass an user object to this fn
    console.log(`The user id is ${user.id}`);
    console.log(`The user name is ${user.name}`);
    
}

// printUser({id: 1, name: 'Steve', age: 10}); //Illegal
printUser({id: 1, name: 'Steve'});