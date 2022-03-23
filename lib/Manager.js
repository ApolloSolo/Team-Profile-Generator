const { Employee } = require('./Employee')

function Manager(id, name, email, office) {
    this.employeeInfo = new Employee(id, name, email, "Manager");
    this.office = office;
}

module.exports = {
    Manager
}