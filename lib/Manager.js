const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '', role, email, office){
        super(name, role, email)
        this.office = office;
    }
}

module.exports = Manager;