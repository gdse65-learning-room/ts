interface Employee {
    empId: number;
    email: string;
    name: string;
}

function validateEmployee(emp: Employee) {
    // validate logic is here....
}
 
validateEmployee({empId: 1, email: 'john@gmail.com', name: 'John'});

// validateEmployee({empId: 2, email: 'steve@abc.com', nam: 'Steve'}); // Illegal