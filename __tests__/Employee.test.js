const Employee = require('../lib/__mocks__/Employee.js');

jest.mock('../lib/Employee.js');

test('creates an enemy object', () => {
  const employee = new Employee('Frank', 'Manager');

  expect(employee.name).toBe('Frank');
  expect(employee.role).toBe('Manager');
  expect(employee.email).toBe('Frank@fakeemail.com');
});

