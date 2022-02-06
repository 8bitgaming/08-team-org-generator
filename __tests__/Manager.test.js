const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('Jared', '1', 'Jared@fakeemail.com', '1')

    expect(manager.name).toBe('Jared');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('Jared@fakeemail.com')
    expect(manager.office).toBe('1')
})