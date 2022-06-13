// importing Employee 
const Employee = require('./Employee');

// manager extends employee 
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // calling employee constructor
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

// to be exported 
module.exports = Manager; 