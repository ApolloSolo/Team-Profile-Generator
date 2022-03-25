const { Engineer } = require('../lib/Engineer')

test('Create an employee object', () => {
    const engineer = new Engineer("1", "Matt", "appsolo.tech@gmail.com");
    engineer.username = "ApolloSolo";
    
    expect(engineer.employeeInfo.id).toEqual(expect.any(String));
    expect(engineer.employeeInfo.name).toEqual(expect.any(String));
    expect(engineer.employeeInfo.email).toEqual(expect.any(String));
    expect(engineer.employeeInfo.rank).toEqual(expect.any(String));
    expect(engineer.username).toEqual(expect.any(String));
})