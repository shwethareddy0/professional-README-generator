// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "projectName",
    message: "What is your project’s name?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project",
  },
  {
    type: "input",
    name: "license",
    message: "What kind of license should your project have?",
  },
  {
    type: "input",
    name: "cmdForDependencies",
    message: "What command should be run to install dependencies? ",
  },
  {
    type: "input",
    name: "cmdForTests",
    message: "What command should be run to run tests?",
  },
  {
    type: "input",
    name: "repoInfo",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

/*Title of the project
Sections
  -Description
  -Table of Contents
    -Installation
    -Usage
    -License
    -Contributing
    -Tests
    -Questions
        -- If you have any questions about the repo,open an issue or contact me directly at (email.com). You can find more of my work at (github username with link to github profile).
        */
