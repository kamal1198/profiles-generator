const Employee = require('./Employee');

// intern extends employee 
class Intern extends Employee {
    constructor(name, id, email, school) {
        // initialize base employee constructor 
        super(name, id, email, 'Intern');

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Intern; 