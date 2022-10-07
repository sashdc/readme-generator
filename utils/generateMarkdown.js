// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license==='None'){
    return''
  }
  else {
    return '- [License](#license)'}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license==='None'){
    return ''
  }
  else {
    return `## License
    
This project was created using ${license} license`
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({project, description, installation, contribution, test, usage, license, github, email }) =>
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

If you have any further questions, please don't hesitate to reach out to me via [email](mailto:${email}), or on GitHub through [my GitHub profile](http://www.github.com/${github}).
`



module.exports = generateMarkdown;
