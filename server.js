////dependencies///////
const mysql = require("mysql");
const inquirer = require("inquirer");

///////sql database////////
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "triforce",
    database: ""
});

//////connect to db/////
connection.connect(function(err) {
    if (err) throw err;
    start();
});


//////inquirer///////
function start() {
inquirer
 .prompt ([
  { 
    name: "username",  
    type: "list",
    message: "What would you like to do? ",
    choices: [
        "View all employees", 
        "View by department", 
        "View by manager",
        "Add Employee",
        "Remove Employee"
    ],


  },   
 ])
};