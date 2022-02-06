const inquirer = require('inquirer');
const Employee = require('./Employee')
const templateBuilter = require('../src/templateBuilder')

class Application {
    constructor() {   
        this.employee
    }

    createEmployee() {
        inquirer
            .prompt({
            type: 'text',
            name: 'name',
            message: 'What is your name?'
            })
            .then(({ name }) => {
            this.employee = new Employee(name);
        })
        .then(data => {
            return templateBuilter(data)
        })
        .then(markdown => {
           return writeToFile(markdown)
        })
    }

    //check for Dist folder and create one using fs if needed
    writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir)
    }
      fs.writeFile('../Dist/index.html', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
          resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  }; 
}

module.exports = Application;