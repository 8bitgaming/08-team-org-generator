const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('John', 'Intern', 'John@fakeemail.com', 'zUniversity')

    expect(intern.name).toBe('John');
    expect(intern.role).toBe('Intern');
    expect(intern.email).toBe('John@fakeemail.com')
    expect(intern.school).toBe('zUniversity')
})