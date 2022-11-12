// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const utils = require ("utils");

const generatorMarkdown = required('./utils/generatorMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input";
    message: "What is the title of the project?",
    name: "Title";
}, {
    type: "input",
    message: "What is the project about"
}


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
