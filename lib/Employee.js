const inquirer = require('inquirer');

class Employee {
    constructor() {
        this.role = 'Employee';
    }

    getName() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'employeeName',
                message: 'Employee name:'
            }
        ])
        .then(answer => {
            this.name = answer.employeeName;
            this.getId();
        });
    }

    getId() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'employeeId',
                message: 'Employee id:'
            }
        ])
        .then(answer => {
            this.id = answer.employeeId;
            this.getEmail();
        });
    }

    getEmail() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'employeeEmail',
                message: 'Employee email:'
            }
        ])
        .then(answer => {
            this.email = answer.employeeEmail;
            console.log(this);
        });
    }

    getRole() {
        return this.role;
    }
}

// const employee1 = new Employee();
// employee1.getName();

module.exports = Employee;