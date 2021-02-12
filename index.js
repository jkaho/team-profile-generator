const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');
const chalk = require('chalk');

const writeFileAsync = util.promisify(fs.writeFile);

const team = [[],[],[]];

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
            writeFileAsync('./dist/profile.html', generateHTML(team))
            .then(() => console.log(chalk.black.bgGreenBright(" New HTML file successfully generated! ")))
            .catch((err) => console.log(chalk.black.bgRedBright(" Opps, there was an error... ", err)))
            break;
    }
}

const managerInfo = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Team manager ' + chalk.italic('name') + ':'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Team manager ' + chalk.italic('employee id') + ':'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Team manager ' + chalk.italic('email') + ':'
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'Team manager ' + chalk.italic('office number') + ':'
        },
        {
            type: 'list',
            name: 'menu',
            message: chalk.yellow('--------- Menu --------- \nChoose one of the following options:'),
            choices: [
                {
                    name: 'Add an' + chalk.bold(' ENGINEER') + ' to my team'
                },
                {
                    name: 'Add an' + chalk.bold(' INTERN') + ' to my team'
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
        team[0].push(manager);
        nextPrompt();
    })
}

managerInfo();

const engineerInfo = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Engineer' + chalk.italic(' name') + ':'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'Engineer' + chalk.italic(' employee id') + ':'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Engineer' + chalk.italic(' email') + ':'
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'Engineer' + chalk.italic(' GitHub username') + ':'
        },
        {
            type: 'list',
            name: 'menu',
            message: chalk.yellow('--------- Menu --------- \nChoose one of the following options:'),
            choices: [
                {
                    name: 'Add another' + chalk.bold(' ENGINEER') + ' to my team'
                },
                {
                    name: 'Add an' + chalk.bold(' INTERN') + ' to my team'
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
        team[1].push(engineer);
        nextPrompt();
    })
}

const internInfo = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'Intern' + chalk.italic(' name') + ':'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'Intern' + chalk.italic(' employee id') + ':'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Intern' + chalk.italic(' email') + ':'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'Intern' + chalk.italic(' id') + ':'
        },
        {
            type: 'list',
            name: 'menu',
            message: chalk.yellow('--------- Menu --------- \nChoose one of the following options:'),
            choices: [
                {
                    name: 'Add an' + chalk.bold(' ENGINEER') + ' to my team'
                },
                {
                    name: 'Add another' + chalk.bold(' INTERN') + ' to my team'
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
        team[2].push(intern);
        nextPrompt();
    })
}

