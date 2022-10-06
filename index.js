// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// create readme content
const generateReadme = ({project, description, installation, contribution, test, license, github, email }) =>
`# ${project}

## Description

${description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

## How to Contribute

${contribution}

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)


## Tests

${test}`


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
        message: 'Any contribution guidelines?',
        name: 'contribution',
      },
    {
      type: 'input',
      message: 'Any test instructions?',
      name: 'test',
    }
    // {
    //     type: 'list',
    //     message: 'Please select and applicable license.',
    //     choices: ['alligator', 'crocodile'],
    //     name: 'license',
    //   }
      {
        type: 'input',
        message: 'Please enter your GitHub username.',
        name: 'github',
      }
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
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });






// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
