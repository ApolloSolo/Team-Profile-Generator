const { Manager } = require('../lib/Manager')

test('Create an employee object', () => {
    const manager = new Manager("Guy", "new.guy@gmail.com");

    expect(manager.employeeInfo.name).toEqual(expect.any(String));
    expect(manager.employeeInfo.email).toEqual(expect.any(String));
    expect(manager.employeeInfo.rank).toEqual(expect.any(String));
})