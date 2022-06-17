interface Admin {
    name: string;
    privileges: string[];
}

interface Employee {
    name: string;
    startDate: Date;
}

interface ElevatedEmployee extends Admin, Employee {}

const e1: ElevatedEmployee = {
    name: 'Bao',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numberic = number | boolean;

type Universal = Combinable & Numberic;

// function add (a: Combinable, b: Combinable) {
//     if (typeof a === 'string' || typeof b === 'string') {
//         return a.toString() + b.toString();
//     } else {
//         return a + b;
//     }
// }

type UnknownEmployee = Admin | Employee;

function printEmployeeInformation (emp: UnknownEmployee) {
    console.log('Name: ', emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ', emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ', emp.startDate);
    }
}

printEmployeeInformation(e1);
printEmployeeInformation({name: 'Gia', startDate: new Date(),});