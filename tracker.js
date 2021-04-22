//dependencies
const inquirer = require('inquirer');
const mysql = require('mysql');
const consoleTable = require('console.table');
const pass = require('./config.js');

//question files



//connections

const pass = require('./config');

const connection = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'trackerDB',
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadID}`);
    init();
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

function init() {
    inquirer.prompt({
        type: 'list',
        message: 'What would you like to do?',
        name: 'switch',
        choices: [
        'View all employees',
        'View all departments', 
        'View all roles', 
        'Add ee', 
        'Remove ee', 
        'Exit'
    ],

   // }) .then(answer =>{
     //   if(answer.switch === '' ){
        //    ask()
        //} else if(answer.switch === ''){
          //  console.log('Direction is equal to ')
       // } else if(answer.switch === ''){
         //   console.log('Direction is equal to ')
        //} else{
          //  process.exit()
        //}

        switch(expression) {
            case x
            //code block
            break;
            case y
            //code block
            break;
            case 'Exit';
            connection.end();
            break;
        }
    })

}


function ask(){
    inquirer.prompt().then(answers =>{
        console.log(answers); const  = new (answers.);
        team.push()
    })
}