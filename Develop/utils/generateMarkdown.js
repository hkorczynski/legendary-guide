const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
    if(license === 'Apache' ) {
        badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'Boost') {
        badge ='[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    } else if (license === 'BSD') {
        badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    } else {
        badge = ''
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
    if (license === 'Apache') {
        licenseLink = 'https://opensource.org/licenses/Apache-2.0'
    } else if (license === 'Boost') {
        licenseLink = 'https://www.boost.org/LICENSE_1_0.txt'
    } else if (license === 'BSD') {
        licenseLink = 'https://opensource.org/licenses/BSD-3-Clause'
    } else {
      licenseLink = ''
    }
    return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
    if (license === 'None') {
      licenseSection = ''
    } else {
      licenseSection = `License: ${license}`
    }
    return licenseSection;
}

// This is the README layout
function generateMarkdown(data) {
  return `
  # ${data.title}
  # Description
  ${data.Description}

  # Table of contents 
  * [Installation](#installation) 
  * [Usage](#usage) 
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  # Installation
  Here is how to use this app: ${data.Usage}
  # License 
  This application is licensed under the ${data.License} license.
  # Contributing 
  Contributors ${data.Contributing}

  # Tests 
  ${data.Tests} is needed to run any tests 
  # Questions 
  If you have questions, please reach out to ${data.Questions}
`;
}

module.exports = generateMarkdown;
