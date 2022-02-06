const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Grace', '3', 'Grace@fakeemail.com', 'gchoi2u')

    expect(engineer.name).toBe('Grace');
    expect(engineer.id).toBe('3');
    expect(engineer.email).toBe('Grace@fakeemail.com')
    expect(engineer.github).toBe('gchoi2u')
})