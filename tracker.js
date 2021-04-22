//dependencies

const mysql = require('mysql');
const pass = require('./config.js');

//connections

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

function init() {
    inquirer.prompt({
        type: 'list',
        message: 'What would you like to do?',
        name: 'switch',
        choices: ['View all employees', 'View all departments', 'View all Roles', 'View ee by manager', 'Remove ee', 'Exit']
    }) .then(answer =>{
        if(answer.switch === '' ){
            ask()
        } else if(answer.switch === ''){
            console.log('Direction is equal to ')
        } else if(answer.switch === ''){
            console.log('Direction is equal to ')
        } else{
            process.exit()
        }
    })

}
const  = [
    {
        type: 'input',
        message: '',
        name: '',
    },
    {
        type: 'input',
        message: '',
        name: '',
    },
    {
        type: 'input',
        message: '',
        name: '',
    },
    {
        type: 'input',
        message: '',
        name: '',
    }
];
const managerQues = [
    {
        type: 'input',
        message: '',
        name: '',
    },
    {
        type: 'input',
        message: '',
        name: '',
    },
    {
        type: 'input',
        message: '',
        name: '',
    },
    {
        type: 'input',
        message: '',
        name: '',
    }
];
function ask(){
    inquirer.prompt().then(answers =>{
        console.log(answers); const  = new (answers.);
        team.push()
    })
}