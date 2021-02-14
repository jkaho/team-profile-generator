// Dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');
const chalk = require('chalk');

// writeFile function
const writeFileAsync = util.promisify(fs.writeFile);

// Team array [[manager], [engineer/s], [intern/s]]
const team = [[],[],[]];

// Runs next function according to inquirer prompt menu selection
let menuPick = "";
function nextPrompt() {
    switch(menuPick) {
        case 'Add an' + chalk.bold(' ENGINEER') + ' to my team':
            engineerInfo();
            break;
        case 'Add an' + chalk.bold(' INTERN') + ' to my team':
            internInfo();
            break;
        case 'Add another' + chalk.bold(' ENGINEER') + ' to my team':
            engineerInfo();
            break;
        case 'Add another' + chalk.bold(' INTERN') + ' to my team':
            internInfo();
            break;
        default:
            writeFileAsync('./dist/profile.html', generateHTML(team))
            .then(() => console.log(chalk.black.bgGreenBright(" New HTML file successfully generated! ")))
            .catch((err) => console.log(chalk.black.bgRedBright(" Oops, there was an error... ", err)))
            break;
    }
}

// Prompt validation functions
function validateName(name) {
    if (name.length <= 25 && name.length > 0) {
        return true;
    } 
    return chalk.redBright('Name must be between 1-25 characters (inclusive)')
}

function validateNumber(num) {
    if (/^[0-9]+$/.test(num)) {
        return true;
    } 
    return chalk.redBright('Only numeric values are accepted')
}

function validateEmail(email) {
    if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) {
        return true;
    }
    return chalk.redBright('Please input a valid email address')
}

function validateGithub(github) {
    if (/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(github)) {
        return true;
    } 
    return chalk.redBright('Please input a valid GitHub username')
}

// Manager prompts
const managerInfo = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Team manager ' + chalk.italic('name') + ' (1-25 characters):',
            validate: validateName
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Team manager ' + chalk.italic('employee ID') + ':',
            validate: validateNumber
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Team manager ' + chalk.italic('email') + ':',
            validate: validateEmail
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'Team manager ' + chalk.italic('office number') + ':',
            validate: validateNumber
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
    });
}

// Engineer prompts
const engineerInfo = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Engineer' + chalk.italic(' name') + ' (1-25 characters):',
            validate: validateName
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'Engineer' + chalk.italic(' employee ID') + ':',
            validate: validateNumber
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Engineer' + chalk.italic(' email') + ':',
            validate: validateEmail
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'Engineer' + chalk.italic(' GitHub username') + ':',
            validate: validateGithub
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
    });
}

// Intern prompts
const internInfo = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'Intern' + chalk.italic(' name') + ' (1-25 characters):',
            validate: validateName
        },
        {
            type: 'input',
            name: 'internId',
            message: 'Intern' + chalk.italic(' employee ID') + ':',
            validate: validateNumber
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Intern' + chalk.italic(' email') + ':',
            validate: validateEmail
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'Intern' + chalk.italic(' school') + ':'
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
    });
}

managerInfo();
