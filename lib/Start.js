const inquirer = require("inquirer");
const { Engineer } = require("./Engineer");
const { Manager } = require("./Manager");
const { Intern } = require("./Intern");
const { templateData } = require("../src/page-template");
const { writeFile } = require("../src/generate-site");

function Start() {
  this.employees = [];

  Start.prototype.askToAdd = function () {
    inquirer
      .prompt({
        type: "list",
        message: "Would you like to add an employee?",
        name: "action",
        choices: ["Yes", "No"],
      })
      .then(({ action }) => {
        if (action === "No") {
            return writeFile(templateData(this.employees));
        } else {
          this.addEmployee();
        }
      });
  };

  Start.prototype.addEmployee = function () {
    inquirer
      .prompt({
        type: "list",
        message: "What position does this employee hold?",
        name: "position",
        choices: ["Manager", "Engineer", "Intern"],
      })
      .then(({ position }) => {
        switch (position) {
          case "Manager":
            this.createManager();
            break;
          case "Engineer":
            this.createEngineer();
            break;
          case "Intern":
            this.createIntern();
            break;
        }
      });
  };

  Start.prototype.createManager = function () {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: `What is the Manager's name?`,
        },
        {
          type: "input",
          name: "email",
          message: `What is the Manager's Email?`,
        },
        {
          type: "input",
          name: "id",
          message: `What is the Manager's employee ID?`,
        },
        {
          type: "input",
          name: "office",
          message: `What is the Manager's office number?`,
        },
      ])
      .then(({ id, name, email, office }) => {
        let newManager = new Manager(id, name, email, office);
        this.employees.push(newManager);
        this.askToAdd();
      });
  };

  Start.prototype.createEngineer = function () {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: `What is the Engineer's name?`,
        },
        {
          type: "input",
          name: "email",
          message: `What is the Engineer's Email?`,
        },
        {
          type: "input",
          name: "id",
          message: `What is the Engineer's employee ID?`,
        },
        {
          type: "input",
          name: "username",
          message: `What is the Engineer's GitHub username?`,
        },
      ])
      .then(({ id, name, email, username}) => {
        let newEngineer = new Engineer(id, name, email, username);
        this.employees.push(newEngineer);
        this.askToAdd();
      });
  };

  Start.prototype.createIntern = function() {
    inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: `What is the Intern's name?`,
      },
      {
        type: "input",
        name: "email",
        message: `What is the Intern's Email?`,
      },
      {
        type: "input",
        name: "id",
        message: `What is the Intern's employee ID?`,
      },
      {
        type: "input",
        name: "school",
        message: `Where did the intern go to school at?`,
      },
    ])
    .then(({ id, name, email, school }) => {
      let newIntern = new Intern(id, name, email, school);
      this.employees.push(newIntern);
      this.askToAdd();
    });
  }
}

module.exports = {
  Start,
};
