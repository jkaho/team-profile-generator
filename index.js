const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');
const { ConsoleWriter } = require('istanbul-lib-report');
const { default: generate } = require('@babel/generator');

const writeFileAsync = util.promisify(fs.writeFile);

const team = [];

let menuPick = "";
function nextPrompt() {
    switch(menuPick) {
        case 'Add an ENGINEER to my team':
            engineerInfo();
            break;
        case 'Add an INTERN to my team':
            internInfo();
            break;
        case 'Add another ENGINEER to my team':
            engineerInfo();
            break;
        case 'Add another INTERN to my team':
            internInfo();
            break;
        default:
            generateHTML(team);
            break;
    }
}

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
        menuPick = answers.menu;
        const manager = new Manager(
            answers.managerName, 
            parseInt(answers.managerId),
            answers.managerEmail,
            parseInt(answers.managerOfficeNumber)
        )
        team.push(manager);
        nextPrompt();
    })
}

managerInfo();

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
        menuPick = answers.menu;
        const engineer = new Engineer(
            answers.engineerName, 
            parseInt(answers.engineerId),
            answers.engineerEmail,
            answers.engineerGithub
        )
        team.push(engineer);
        nextPrompt();
    })
}

const internInfo = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'Intern name:'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'Intern id:'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Intern email:'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'Intern school:'
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
                    name: 'Add another INTERN to my team'
                },
                {
                    name: 'My team is complete'
                }
            ]
        }
    ])
    .then((answers) => {
        menuPick = answers.menu;
        const intern = new Intern(
            answers.internName, 
            parseInt(answers.internId),
            answers.internEmail,
            answers.internSchool
        )
        team.push(intern);
        nextPrompt();
    })
}

