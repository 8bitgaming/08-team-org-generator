const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('John', '5', 'John@fakeemail.com', 'zUniversity')

    expect(intern.name).toBe('John');
    expect(intern.id).toBe('5');
    expect(intern.email).toBe('John@fakeemail.com')
    expect(intern.school).toBe('zUniversity')
    expect(intern.role).toBe('Intern')
})