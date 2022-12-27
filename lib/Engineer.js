// define engineer class

const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.gitHub = this.gitHub;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getGithub() {
    return this.gitHub;
  }
  getRole() { 
    return "Engineer"
  }
}

module.exports.Engineer;
