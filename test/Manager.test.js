const Manager = require('../lib/Manager');

const manager = new Manager('Manager', 'josh', 32, 'josh@gmail.com', 555, 'github');

test('this will create a Manager object', () => {
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('this test get the Manager role', () => { 
    expect(manager.getRole()).toEqual("Manager"); 
});