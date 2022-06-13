// importing Employee 
const Employee = require("./Employee");

// engineer extends employee 
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // calling employee constructor 
        super(name, id, email);

        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

// to be exported 
module.exports = Engineer; 