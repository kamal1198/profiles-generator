// importing Employee 
const Employee = require('./Employee');

// intern extends employee 
class Intern extends Employee {
    constructor(name, id, email, school) {
        // calling employee constructor
        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

// to be exported 
module.exports = Intern;
