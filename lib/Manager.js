const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber, name, id, email) {
        super(name, id, email)
        this.officeNumber = officeNumber

    }
      getofficeNumber() {
        return this.officeNumber;
      }
      
      getRole() {
        return 'manager';
      };
}    

module.exports = Manager;
