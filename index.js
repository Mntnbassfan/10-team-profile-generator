const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = (OUTPUT_DIR, "group.html");

let groupArray = [];
const engineerCard = require("./src/engineer-card");
const managerCard = require("./src/manager-card");
const internCard = require("./src/intern-card");

// create group function
function createGroup() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Which kind of employee do you want to add?",
        name: "addEmployee",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
          "No more team members are needed.",
        ],
      },
    ])
    .then(function (userInput) {
      switch (userInput.addEmployee) {
        case "Manager":
          createManager();
          break;
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
      }
    });
}

// manager input
function createManager() {
  inquirer
    .prompt([
      {
        message: "What is the managers name?",
        type: "input",
        name: "name",
      },
      {
        message: "What is the manager ID?",
        type: "input",
        name: "id",
      },
      {
        message: "What is the managers email?",
        type: "input",
        name: "email",
      },
      {
        message: "What is the managers office number?",
        type: "input",
        name: "officeNumber",
      },
    ])
    .then((manager) => {
      let newManager = new Manager(
        manager.name,
        manager.id,
        manager.email,
        manager.officeNumber
      );
      groupArray.push(newManager);
      createGroup();
    });
}

// engineer input
function createEngineer() {
  inquirer
    .prompt([
      {
        message: "What is the engineers name?",
        type: "input",
        name: "name",
      },
      {
        message: "What is the Engineers ID?",
        type: "input",
        name: "id",
      },
      {
        message: "What is the engineers email?",
        type: "input",
        name: "email",
      },
      {
        message: "What is the engineer's GitHub username?",
        type: "input",
        name: "github",
      },
    ])
    .then((engineer) => {
      let newEngineer = new Engineer(
        engineer.name,
        engineer.id,
        engineer.email,
        engineer.github
      );
      groupArray.push(newEngineer);
      createGroup();
    });
}

// intern input
function createIntern() {
  inquirer
    .prompt([
      {
        message: "What is the interns name?",
        type: "input",
        name: "name",
      },
      {
        message: "What is the interns ID?",
        type: "input",
        name: "id",
      },
      {
        message: "What is the interns email?",
        type: "input",
        name: "email",
      },
      {
        message: "What is the interns school?",
        type: "input",
        name: "github",
      },
    ])
    .then((intern) => {
      let newIntern = new Intern(
        intern.name,
        intern.id,
        intern.email,
        intern.github
      );
      groupArray.push(newIntern);
      createGroup();
    });
}

createGroup();

function generateHTML() {
  var html = '';
  for (let i = 0; i < groupArray.length; i++) {
    let employee = groupArray[i];
    if (employee.getRole() === "Manager") {
      html += managerCard(employee);
    } else if (employee.getRole() === "Engineer") {
      html += engineerCard(employee);
    } else if (employee.getRole() === "Intern") {
      html += internCard(employee);
    }
  }
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
      ${
html
      }
  </body>
  </html>`
}

// use writeFileSync as a promise
const initialize = () => {
  promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((answers) => writeFile('index.html', generateHTML(answers)))
    .then(() => console.log('Wrote to index.html'))
    .catch((err) => console.error(err));
};

initialize();
