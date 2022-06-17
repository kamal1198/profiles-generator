const Employee = require('./Employee');

// manager extends employee 
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // initialize base employee constructor 
        super(name, id, email, 'Manager');

        this.officeNo = officeNumber;
    }

    getRole() {
        return this.role;
    }

    getOfficeNumber() {
        return this.officeNo;
    }
}

module.exports = Manager; 