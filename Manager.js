// define manager class

const Employee = require("./employee.js");

class Manager extends Employee {
  constructor(name, id, email) {
    super(name, id, email);
    this.officeNumber = officeNumber;
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
  getofficeNumber() {
    return this.officeNumber;
  }
}

module.exports.Manager;
