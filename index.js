
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// const markDown = new genMD()


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is your Project Title?',
      name: 'project',
    },
    {
        type: 'input',
        message: 'Please enter brief description of your project.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Please note any installation instructions.',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Any usage guidelines?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Any contribution guidelines?',
        name: 'contribution',
      },
    {
      type: 'input',
      message: 'Any test instructions?',
      name: 'test',
    },
    {
        type: 'list',
        message: 'Please select an applicable license.',
        choices: ['MIT', 'Apache 2.0 License', 'Boost Software License 1.0','None'],
        name: 'license',
      },
      {
        type: 'input',
        message: 'Please enter your GitHub username.',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Please enter your email address.',
        name: 'email',
      }
  ]

// TODO: Create a function to write README file
// .then((response) => {
//     const readmeContent = generateReadme(response);

function writeReadMe(answers) { 
      fs.writeFile('readme.md', generateMarkdown(answers), (err) =>
      err ? console.log(err) : console.log('Successfully created ReadMe!')
    );}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then 
  (function (answers) {
    writeReadMe(answers)
  })}

// Function call to initialize app
init();
