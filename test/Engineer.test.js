const Engineer = require('../lib/Engineer');

const engineer = new Engineer('engineer', 'NikTheEngineer', 29, 'engineer.niksharpking@gmail.com', 'EngineerTest', "UW", "github"); 

test('creates an Engineer object', () => { 
    expect(engineer.github)
        .toEqual(expect.any(String)); 
});

test('gets engineer github value', () => { 
    expect(engineer.getGithub())
        .toEqual(expect.stringContaining(engineer.github.toString())); 
});

test('gets of employee role', () => { 
    expect(engineer.getRole())
        .toEqual("Engineer");
});