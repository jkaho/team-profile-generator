const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { ConsoleWriter } = require('istanbul-lib-report');

const writeFileAsync = util.promisify(fs.writeFile);

managerInfo();

const managerInfo = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Team manager name:'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Team manager id:'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Team manager email:'
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'Team manager office number:'
        },
        {
            type: 'list',
            name: 'menu',
            message: 'Menu:',
            choices: [
                {
                    name: 'Add an ENGINEER to my team'
                },
                {
                    name: 'Add an INTERN to my team'
                },
                {
                    name: 'My team is complete'
                }
            ]
        }
    ])
    .then((answers) => {
        const manager = new Manager(
            answers.managerName, 
            parseInt(answers.managerId),
            answers.managerEmail,
            parseInt(answers.managerOfficeNumber)
        )
        return manager;
    })
}

const engineerInfo = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Engineer name:'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'Engineer id:'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Engineer email:'
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'Engineer Github username:'
        },
        {
            type: 'list',
            name: 'menu',
            message: 'Menu:',
            choices: [
                {
                    name: 'Add another ENGINEER to my team'
                },
                {
                    name: 'Add an INTERN to my team'
                },
                {
                    name: 'My team is complete'
                }
            ]
        }
    ])
    .then((answers) => {
        const engineer = new Engineer(
            answers.engineerName, 
            parseInt(answers.engineerId),
            answers.engineerEmail,
            parseInt(answers.engineerGithub)
        )
        return engineer;
    })
}

