const { Manager } = require('../lib/Manager')

test('Create an employee object', () => {
    const manager = new Manager("2", "Guy", "new.guy@gmail.com");
    manager.office = 27;

    expect(manager.employeeInfo.name).toEqual(expect.any(String));
    expect(manager.employeeInfo.email).toEqual(expect.any(String));
    expect(manager.employeeInfo.rank).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number));
})