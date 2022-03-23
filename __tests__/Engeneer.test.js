const { Engineer } = require('../lib/Engineer')

test('Create an employee object', () => {
    const engineer = new Engineer("Matt", "appsolo.tech@gmail.com");

    expect(engineer.employeeInfo.name).toEqual(expect.any(String));
    expect(engineer.employeeInfo.email).toEqual(expect.any(String));
    expect(engineer.employeeInfo.rank).toEqual(expect.any(String));
})