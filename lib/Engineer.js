const { Employee } = require("./Employee");

function Engineer(id, name, email, username) {
  this.employeeInfo = new Employee(id, name, email, "Engineer");
  this.username = username;
  let gitHubName = this.username.split(" ");
  this.gitHubLink;

  if (gitHubName.length > 1) {
    this.gitHubLink = `https://github.com/${gitHubName[0]}${gitHubName[1]}`;
  } else {
    this.gitHubLink = `https://github.com/${gitHubName[0]}`;
  }
}
//const en = ["Apollo Solo", "email.com"];

//console.log(new Engineer(...en));

module.exports = {
  Engineer,
};
