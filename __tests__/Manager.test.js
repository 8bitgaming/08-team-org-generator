const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('Jared', 'Manager', 'Jared@fakeemail.com', '1')

    expect(manager.name).toBe('Jared');
    expect(manager.role).toBe('Manager');
    expect(manager.email).toBe('Jared@fakeemail.com')
    expect(manager.office).toBe('1')
})