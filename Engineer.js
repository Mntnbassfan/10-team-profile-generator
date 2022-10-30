// define engineer class

const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
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
  getgitHub() {
    return this.gitHub;
  }
}

module.exports.Engineer;
