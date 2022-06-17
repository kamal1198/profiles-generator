const inquirer = require('inquirer');

const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// validations for the prompts
const validateText = input => {
    if (input) {
        return true;
    }
    console.log("Please enter a text value!");
    return false;
}

// validate number
const validateNumber = number => {
    if (isNaN(number)) {
        console.log("Please enter a number!");
        return false;
    }
    return true;
}

// validate email
const validateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let valid = re.test(String(email).toLowerCase());
    if(! valid) {
        console.log("Please enter a valid email!");
        return false;
    }
    return true;
}

// start of manager prompts 
function addManager(employees) {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter manager\'s name: ',
            validate: validateText
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the manager's ID: ",
            validate: validateNumber
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter manager's email: ",
            validate: validateEmail
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter manager's office number: ",
            validate: validateNumber
        }
    ])
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            employees.push(new Manager(name, id, email, officeNumber));
        })
};

const addEmployees = (employees) => {
    console.log('---------------------');
    console.log('> Add employee');
    console.log('---------------------');

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Select employee role: ",
            choices: ['Intern', 'Engineer']
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter employee name: ",
            validate: validateText
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter employee ID: ",
            validate: validateNumber
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter employee email: ",
            validate: validateEmail
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter employee's Github username: ",
            when: (input) => input.role === "Engineer",
            validate: validateText
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school: ",
            when: (input) => input.role === "Intern",
            validate: validateText
        },
        {
            type: 'confirm',
            name: 'addMoreMembers',
            message: 'Add more members?',
            default: false
        }
    ])
        .then(employeeData => {
            let { name, id, email, role, github, school, addMoreMembers } = employeeData

            role == "Intern"
                ?
                employees.push(new Intern(name, id, email, school))
                : employees.push(new Engineer(name, id, email, github))

            return addMoreMembers ? addEmployees(employees) : employees
        })
};

async function collect() {
    // team array
    const employees = [];

    // add the manager
    await addManager(employees);

    // return added employees
    return await addEmployees(employees)
}

module.exports = collect
