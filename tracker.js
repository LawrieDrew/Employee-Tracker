//dependencies
const inquirer = require('inquirer');
const mysql = require('mysql');
const consoleTable = require('console.table');
const pass = require('./config');

//questions
const deptQues = require('./db/questions/dept');
const empQues = require('./db/questions/employee');
const roleQues = require('./db/questions/role');


//connections & passwords

const connection = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user: 'root',
    password: pass,
    database: 'trackerDB',
});

module.exports = connection;

//make a list w/switch statement
//what would you like to do?
//View all employees
//View all departments
//View all roles
//Search for ee
//remove ee

function init() {
    inquirer.prompt({
        type: 'list',
        message: 'What would you like to do?',
        name: 'switch',
        choices: [
        'View all employees',
        'View all departments', 
        'View all roles', 
        'Add employee', 
        'Remove employee', 
        'Exit'
    ],

}) .then(function (answer) {
    switch (answer.action) {
        case 'View all employees':
            viewEmployees();
            break;
        case 'View all departments':
            viewDepartments();
            break;
        case 'View all roles':
            viewRoles();
            break;
        case 'Add employee':
            AddEmp();
            break;
        case 'Remove employee':
            RemEmp();
            break;
        case 'Exit':
            connection.end();
            break;
    }
})

}

//function for each option
//joins here!
// SELECT * FROM department;
 // SELECT * FROM role;
 // SELECT * FROM employee;

function viewEmployees() {
    var query = 'SELECT * FROM employee';
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.log(res.length + " employees match criteria");
        console.table('All Employees:', res);
        init();
    })
}

function viewDepartments() {
    var query = 'SELECT * FROM department';
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.log(res.length + ' departments match criteria');
        console.table('All Departments', res);
        init();
    })

}

function viewRoles() {
    var query = 'SELECT * FROM role';
    connection.query(query, function(err, res) {
        if(err) throw err;
        console.log(res.length + ' roles match criteria');
        console.table('All roles', res);
        init();
    })
}

function AddEmp() {
    connection.query('SELECT * FROM role', function(err, res) {
        if (err) throw err;

        inquirer.prompt([
        {
            name: 'first_name',
            type: 'input',
            message: 'New employees frist name',
        },
        {
            name: 'last_name',
            type: 'input',
            message: 'New employees last name',

        },
        {
            name: 'role',
            type: 'list',
            choices: 
                function() {
                    var roleArray = [];
                    for (let i = 0; i < res.length; i++) {
                        roleArray.push(res[i].title);
                    }
                    return roleArray;
                },
                message: 'New employees Role'
        }
     ]).then(function (answer) {
         let roleID;
         for (let j=0; j < res.length; j++) {
             if (res[j].title == answer.role) {
                 roleID = res[j].id;
                 console.log(roleID);
             }
         };
         connection.query(
             'INSERT INTO employee SET?',
             {
                first_name: answer.first_name,
                last_name: answer.last_name,
                role_id: roleID,
             },
             function (err) {
                 if (err) throw err;
                 console.log( 'New employee successfully added');
                 init()
             }
         )
     })
    
    })
}

function removeEmp() {
    inquirer.prompt ({
        name: 'removeEmp',
        type: 'input',
        message: 'Confirm employee ID to remove'
    })
     .then(function (answer) {
        console.log(answer);
        var query = 'DELETE FROM employee WHERE ?';
        var newId = Number(answer.removeEmp);
        console.log(newId);
        connection.query(query, { id: newId }, function (err, res){
            init();
        });
    })
}

init();
