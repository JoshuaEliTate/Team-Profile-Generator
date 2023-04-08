const Intern = require('../lib/Intern'); 

const intern = new Intern('engineer', 'josh', 29, 'josh@gmail.com', 'InternTest', 'UW', 'github'); 

test('creates an Intern object', () => { 
    expect(intern.school)
        .toEqual(expect.any(String)); 
});

test('gets employee school', () => {
    expect(intern.getSchool())
        .toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets of employee role', () => { 
    expect(intern.getRole())
        .toEqual("Intern");
});