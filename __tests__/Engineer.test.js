const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Grace', 'Engineer', 'Grace@fakeemail.com', 'gchoi2u')

    expect(engineer.name).toBe('Grace');
    expect(engineer.role).toBe('Engineer');
    expect(engineer.email).toBe('Grace@fakeemail.com')
    expect(engineer.github).toBe('gchoi2u')
})