const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

// const employee1 = new Employee();

// console.log(inquirer.prompt([
//     {
//         type: 'input',
//         name: 'test',
//         message: 'Write whatever'
//     }
// ]))

module.exports = Employee;