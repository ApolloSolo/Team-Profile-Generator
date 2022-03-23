const { Employee } = require('./Employee')

function Intern(id, name, email, school) {
    this.employeeInfo = new Employee(id, name, email, "Intern");
    this.school = school;
}

module.exports = {
    Intern
}