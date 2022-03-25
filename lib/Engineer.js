const { Employee } = require("./Employee");

function Engineer(id, name, email, username) {
  this.employeeInfo = new Employee(id, name, email, "Engineer");
  this.username = `https://github.com/${username}`;

}
//const en = ["Apollo Solo", "email.com"];

//console.log(new Engineer(...en));

module.exports = {
  Engineer,
};
