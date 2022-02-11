
const templateBuilder = (employees) => {
// employees.forEach(employee => {
//   if (employee.role === 'Manager') {
//     createManagerCard(employee)
//   } else if (employee.role === 'Engineer'){
//     createEngineerCard(employee)
//     } else {
//       createInternCard(employee)
//     }
// }

  // console.log("employees", employees)
  //   [ managerName, managerId, managerEmail, managerRole, managerOffice] = employees.filter(employee => employee.role === 'Manager')
  //   console.log("manager", manager)
  // employees.forEach(employee => (employee.role === 'Manager') ? console.log(employee.name) : null)
    return `
    <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My Team!</title>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  </head>
  <body>
  <header class="w3-container w3-red w3-center">
      <h1>My Team</h1>
    </header>
   <section class="employee-cards w3-padding-large w3-row ">
       <!-- Example Card -->
    <div class="w3-card-4 w3-col m4 l2 w3-margin">

        <header class="w3-container w3-blue">
          <h1>John Smith</h1>
          <h3>Manager</h3>
        </header>
        
        <div class="w3-container w3-padding-32">
        
            <table class="w3-table w3-bordered">
              <tr>
                <th>ID:</th>
                <td>Smith</td>
              </tr>
              <tr>
                <th>E-mail:</th>
                <td>Smith</td>
              </tr>
              <tr>
                <th>Office:</th>
                <td>Smith</td>
              </tr>
            </table>
          </div>
        
    </div>
   </section> 
  </body>
</html>
    `
}

module.exports = templateBuilder;