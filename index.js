const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const templateBuilder = require('./src/templateBuilder')
const fs = require('fs');
const readline = require('readline')
let employees = []
const regExEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/

//Ask questions for manager, then provide looping list of questions for other employee types
const createManager = async () => {
  console.log(
  `
  -------------------------------------------------------------------------------------------
  _______                            _______                                __              
  |_     _|.-----.---.-.--------.    |     __|.-----.-----.-----.----.---.-.|  |_.-----.----.
    |   |  |  -__|  _  |        |    |    |  ||  -__|     |  -__|   _|  _  ||   _|  _  |   _|
    |___|  |_____|___._|__|__|__|    |_______||_____|__|__|_____|__| |___._||____|_____|__|  
                                                                                                                              
  ----------------------------------@2022 Jeremy Gieske--------------------------------------                                                                            
  `)
      
  await inquirer
      .prompt([{
      type: 'text',
      name: 'name',
      message: 'Please enter the manager\'s name:',
      validate: nameInput_1 => {
        if (nameInput_1) {
            return true;
        } else {
            console.log('Please enter a name!');
            return false;
        }
      }
      },
      {
        type: 'text',
        name: 'id',
        message: 'Please enter the manager\'s ID:',
        validate: idInput => {
          if (idInput) {
              return true;
          } else {
              console.log('Please enter an ID!');
              return false;
          }
      }
      },
      {
        type: 'text',
        name: 'email',
        message: 'Please enter the manager\'s email:',
        validate: emailInput => {
          if (emailInput && regExEmail.test(emailInput)) {
              return true;
          } else {
              console.log('---->Please enter a valid email!');
              return false;
          }
      }
      },
      {
        type: 'text',
        name: 'office',
        message: 'Please enter the manager\'s office:',
        validate: officeInput => {
          if (officeInput) {
              return true;
          } else {
              console.log('Please enter an office!');
              return false;
          }
      }
      },
    ]).then(({name, id, email, office}) => {
      return employees.push(new Manager(name, id, email, office));
  })
  }

  const createEmployee = async () => {
    console.log(`
    ---------------
    Add an Employee
    ---------------
    `)
    await inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: 'Which employee role would you like to add:',
      choices: ['None', 'Engineer', 'Intern']
    },
  ]).then(({type}) => {
      switch (type) {
        case 'Engineer': createEngineer()
        break;
        case 'Intern': createIntern()
        break;
        case 'None': createMarkUp()
        break;
        default: console.log('There was an error.')
      }
    })
}

  const createEngineer = async () => {
    await inquirer
    .prompt([{
    type: 'text',
    name: 'name',
    message: 'Please enter the engineer\'s name:',
    validate: nameInput_1 => {
      if (nameInput_1) {
          return true;
      } else {
          console.log('Please enter a name!');
          return false;
      }
    }
    },
    {
      type: 'text',
      name: 'id',
      message: 'Please enter the engineer\'s ID:',
      validate: idInput => {
        if (idInput) {
            return true;
        } else {
            console.log('Please enter an ID!');
            return false;
        }
    }
    },
    {
      type: 'text',
      name: 'email',
      message: 'Please enter the engineer\'s email:',
      validate: emailInput => {
        if (emailInput && regExEmail.test(emailInput)) {
            return true;
        } else {
            console.log('---->Please enter a valid email!');
            return false;
        }
    }
    },
    {
      type: 'text',
      name: 'github',
      message: 'Please enter the engineer\'s github username:',
      validate: gitHubInput => {
        if (gitHubInput) {
            return true;
        } else {
            console.log('Please enter an github username!');
            return false;
        }
    }
    },
    {
      type: 'confirm',
      name: 'confirmAnotherEmployee',
      message: 'Would you like to enter another employee?',
      default: false
    },
  ]).then(({name, id, email, github, confirmAnotherEmployee}) => {
    employees.push(new Engineer(name, id, email, github));
    confirmAnotherEmployee ? createEmployee() : createMarkUp()
})
}

const createIntern = async () => {
  await inquirer
  .prompt([{
  type: 'text',
  name: 'name',
  message: 'Please enter the intern\'s name:',
  validate: nameInput_1 => {
    if (nameInput_1) {
        return true;
    } else {
        console.log('Please enter a name!');
        return false;
    }
  }
  },
  {
    type: 'text',
    name: 'id',
    message: 'Please enter the intern\'s ID:',
    validate: idInput => {
      if (idInput) {
          return true;
      } else {
          console.log('Please enter an ID!');
          return false;
      }
  }
  },
  {
    type: 'text',
    name: 'email',
    message: 'Please enter the intern\'s email:',
    validate: emailInput => {
      if (emailInput && regExEmail.test(emailInput)) {
          return true;
      } else {
          console.log('---->Please enter a valid email!');
          return false;
      }
  }
  },
  {
    type: 'text',
    name: 'school',
    message: 'Please enter the intern\'s school:',
    validate: schoolInput => {
      if (schoolInput) {
          return true;
      } else {
          console.log('Please enter a school!');
          return false;
      }
  }
  },
  {
    type: 'confirm',
    name: 'confirmAnotherEmployee',
    message: 'Would you like to enter another employee?',
    default: false
  },
]).then(({name, id, email, school, confirmAnotherEmployee}) => {
  employees.push(new Intern(name, id, email, school));
  confirmAnotherEmployee ? createEmployee() : createMarkUp()
})
}

//callback to generate the html markup
const createMarkUp = () => {
  writeToFile(templateBuilder(employees))
}



//create the file
writeToFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
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

  createManager()
   .then (createEmployee)