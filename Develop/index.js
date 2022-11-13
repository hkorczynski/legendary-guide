// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const utils = require ("utils");

const generatorMarkdown = required('./utils/generatorMarkdown');

// TODO: Create an array of questions for user input

// Start of questions array and title 
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title",
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('Please enter a project title');
            return false;
        }
    }
}, 


// Description
{
    type: "input",
    message: "What is the description of this project?",
    name: "Description",
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('Please enter a description');
            return false;
        }
    }
}, 


// Table of Contents
{
    type: "input",
    message: "Table of Contents",
    name: "Table of Contents",
}, 


// Installation
{
    type: "input",
    message: "What is needed to install this application?",
    name: "Installation",
    validate: installationInput => {
        if (installationInput) {
            return true;
        } else {
            console.log('Please enter installation required or say "None"');
            return false;
        }
    }
}, 


// Usage
{
    type: "input",
    message: "How will this app be used? Give instructions.",
    name: "Usage",
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('Please enter instructions for how this app will be used.');
            return false;
        }
    }
}, 


// License
{
    type: "list",
    message: "What license is being used for this application?",
    choices: ['None', 'Apache', 'Boost', 'BSD']
    name: "License",
}, 


// Contributing
{
    type: "input",
    message: "Who contributed to this project?",
    name: "Contributing",
    validate: contributingInput => {
        if (contributingInput) {
            return true;
        } else {
            console.log('Please enter names of people who contributed.');
            return false;
        }
    }
}, 


// Questions
{
    type: "input",
    message: "Add contact information for inquiries.",
    name: "Questions",
}, 


// Username
{
    type: "input",
    message: "What is your Github user name?",
    name: "Username",
}, 


// Email
{
    type: "input",
    message: "What is your email address?",
    name: "Email",
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log('Please enter an email address.');
            return false;
        }
    }
}


];

// End of questions array


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
