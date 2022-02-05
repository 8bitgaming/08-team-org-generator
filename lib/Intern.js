const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '', role, email, school){
        super(name, role, email)
        this.school = school;
    }
}

module.exports = Intern;