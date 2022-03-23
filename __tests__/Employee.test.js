const { Employee } = require("../lib/Employee");

test('Create an employee object', () => {
    const employee = new Employee("Matt", "appsolo.tech@gmail.com", "Manager");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.rank).toEqual(expect.any(String));
})