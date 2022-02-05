const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '', role, email, github){
        super(name, role, email)
        this.github = github;
    }
}

module.exports = Engineer;