const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");

teamArray = [];

// manager input
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
      message: "What is the nmanagers office number?",
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
    )
    teamArray.push(newManager)
  });
