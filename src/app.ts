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
console.log(Universal)