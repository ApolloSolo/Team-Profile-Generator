const { Intern } = require('../lib/Intern')

test('Create an employee object', () => {
    const intern = new Intern("Guy", "new.guy@gmail.com");

    expect(intern.employeeInfo.name).toEqual(expect.any(String));
    expect(intern.employeeInfo.email).toEqual(expect.any(String));
    expect(intern.employeeInfo.rank).toEqual(expect.any(String));
})