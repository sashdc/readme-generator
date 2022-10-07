
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

function renderBadge(license){
  if (license==='MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if (license==='Apache 2.0 License'){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  if (license==='Boost Software License 1.0'){
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  }
  if (license==='None'){
    return ''
  }
}

function renderLicenseLink(license) {
  if (license==='None'){
    return''
  }
  else {
    return '- [License](#license)'}
}

function renderLicenseSection(license) {
  if (license==='None'){
    return ''
  }
  else {
    return `## License
    This project was created using ${license} license`
  }
}


// create readme content
const generateReadme = ({project, description, installation, contribution, test, usage, license, github, email }) =>
`# ${project}

${renderBadge(license)}
## Description

${description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [How To Contribute](#how-to-contribute)
${renderLicenseLink(license)}
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## How to Contribute

${contribution}

${renderLicenseSection(license)}

## Tests

${test}

## Questions

If you have any further questions, please don't hesitate to reach out to me via [email](${email}), or on GitHub through [my GitHub profile](http://www.github.com/${github}).
`


// TODO: Create an array of questions for user input
 inquirer
    .prompt([
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
  ])
// TODO: Create a function to write README file
.then((response) => {
    const readmeContent = generateReadme(response);

    fs.writeFile('readme.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created ReadMe!')
    );
  });






// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
