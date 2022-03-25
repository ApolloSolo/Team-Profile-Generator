const { Intern } = require('../lib/Intern')

test('Create an employee object', () => {
    const intern = new Intern("2", "Guy", "new.guy@gmail.com");
    intern.school = "UOP";

    expect(intern.employeeInfo.name).toEqual(expect.any(String));
    expect(intern.employeeInfo.email).toEqual(expect.any(String));
    expect(intern.employeeInfo.rank).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})