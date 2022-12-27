//  define intern class

const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = this.school;
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
  getSchool() {
    return this.school;
  }
  getRole() { 
    return "Intern"
  }
}

module.exports.Intern;
