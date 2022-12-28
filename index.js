const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = (OUTPUT_dir, "group.html");

groupArray = [];

// create group function
function createGroup () {
    inquirer.prompt([{
      type: "list",
      message: "Which kind of employee do you want to add?",
      name: "addEmployee",
      choices: ["Manager", "Engineer", "Intern", "No more team members are needed."]
    }]).then(function (userInput) {
      switch(userInput.addEmployee) {
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
    })
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
    });
}

createGroup;
