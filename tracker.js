//dependencies

const mysql = require('mysql');
const pass = require('./config.js');

//connections

const connection = mysql.createConnection({
    host:'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'trackerDB',
});

connection.connect((err) => {
    if (err) throw err;
    console.log('connected as id ${connection.threadID}');
    connection.end();



})

//make a list w/switch statement like Corey taught you
//what would you like to do?
//View all employees
//View all departments
//View all roles
//Search for ee
//search for ee by manager
//remove ee
//remove department 

