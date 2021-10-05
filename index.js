const fs = require('fs');
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const newManager = new Manager(response.officeNumber, response.name, response.id, response.email);
// const newEngineer = new Engineer(response.github, response.name, response.id, response.email);
// const newIntern = new Intern(response.school, response.name, response.id, response.email);

// const employee = new Employee()
const enterManager = () => { //inquire prompt 
   inquirer 
    .prompt([
        {
        type: "input",
        name: "name",
        message: "What is the team managers name?",   
        },
        {
        type: "input",
        name: "id",
        message: "What is the team managers employee ID number?",   
        },
        {
        type: "input",
        name: "email",
        message: "What is the team managers email address?",   
        },
        {
        type: "input",
        name: "officeNumber",
        message: "What is the team managers office number?",   
        },
    ])
    .then((response) => {
       managerDiv = `<div>
         <div>${response.name}</div>
         <div>${response.id}</div>
         <div>${response.email}</div>
         <div>${response.officeNumber}</div>
       </div>`
        userChoice()
    })
                           
}

function enterIntern() {
    inquirer 
        .prompt([
            {
            type: "input",
            name: "name",
            message: "What is the interns name?",   
            },
            {
            type: "input",
            name: "id",
            message: "What is the interns employee ID number?",   
            },
            {
            type: "input",
            name: "email",
            message: "What is the interns email address?",   
            },
            {
            type: "input",
            name: "school",
            message: "What is the name of the school the intern attended?",   
            },
        ])
        .then((response) => {
         internDiv = `<div>
            <div>${response.name}</div>
            <div>${response.id}</div>
            <div>${response.email}</div>
            <div>${response.school}</div>
        </div>`;
            userChoice();
        });
}

function enterEngineer() {
    inquirer 
        .prompt([
            {
            type: "input",
            name: "name",
            message: "What is the engineers name?",   
            },
            {
            type: "input",
            name: "id",
            message: "What is the engineers employee ID number?",   
            },
            {
            type: "input",
            name: "email",
            message: "What is the engineers email address?",   
            },
            {
            type: "input",
            name: "github",
            message: "What is the engineers Github username?",   
            },
        ])
        .then((response) => {
         engineerDiv = `<div>
            <div>${response.name}</div>
            <div>${response.id}</div>
            <div>${response.email}</div>
            <div>${response.github}</div>
        </div>`;
            userChoice();
        });
}

function userChoice() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "fork",
                message: "Would you like to add an Engineer or an Intern to the team?",
                choices:["Add Engineer", "Add Intern", "Nothing to add"],
            },
        ])
        .then((response) => {
            if (response.fork === "Add Engineer") {
                enterEngineer();
            } else if (response.fork === "Add Intern") {
                enterIntern();
            } else {
                nothingAdded()
            }
        })
}

function nothingAdded() {
    const htmlText = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="./dist/style.css">
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main>
        ${managerDiv}
        
    </main>
    <footer>
        <div>

        </div>
    </footer>
</body>
</html>`;

fs.writeFile('index.html', htmlText, err => {
    err ? console.error(err) : console.log('Success!')
    });
}

enterManager();


// .prompt([
//     {
//       type: "input",
//       name: "choice",
//       message: "Guess a letter!",
//       // The users guess must be a number or letter
//       //   validate: val => /[a-z1-9]/gi.test(val),          
//     }
//   ])
//  