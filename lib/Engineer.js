const Employee = require("./Employee");

// engineer extends employee 
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // initialize base employee constructor 
        super(name, id, email, 'Engineer');

        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Engineer; 