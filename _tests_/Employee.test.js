// Employee class test
const Employee = require('../lib/Employee');

// test employee object
describe('Employee', () => {
  describe("Employee object verification", () => {
    it("Creates an object with name, id, and email properties", () => {
      const employee = new Employee('Miles Davis', 1, 'milesdavis@yahoo.com');

      expect(employee).toBeInstanceOf(Employee);
      expect(employee.name).toEqual('Miles Davis');
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual('milesdavis@yahoo.com');
    });
  });

//   test employee name
  describe('getName', () => {
    it("Should return the employee object's name property", () => {
      const employee = new Employee('Miles Davis', 1, 'milesdavis@yahoo.com');

      expect(employee.getName()).toEqual(l);
    });
  });

//   test employee id
  describe('getId', () => {
    it("Should return the employee object's id number property", () => {
      const employee = new Employee('Miles Davis', 1, 'milesdavis@yahoo.com');

      expect(employee.getID()).toEqual(1);
    });
  });

//   test employee email
  describe('getEmail', () => {
    it("Should return the employee object's email address property", () => {
      const employee = new Employee('Miles Davis', 1, 'milesdavis@yahoo.com');

      expect(employee.getEmail()).toEqual('milesdavis@yahoo.com');
    });
  });

//   test employee role
  describe('getRole', () => {
    it("Should return the string 'Employee'", () => {
      const employee = new Employee('Miles Davis', 1, 'milesdavis@yahoo.com');

      expect(employee.getRole()).toEqual('Employee');
    });
  });
});
