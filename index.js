// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
const {inherits} = require("util");

const questions = [
  {
    type: "input",
    mesage: "What is your Github username?",
    name: "Username",
  },
  {
    type: "input",
    message: "What is the repository name?",
    name: "Repository",
  },
  {
    type: "input",
    message: "Give a quick description of the project?",
    name: "Description",
  },
  {
    type: "input",
    message: "Please list your table of contents?",
    name: "Contents",
  },
  {
    type: "input",
    message: "What are the instructions for installation?",
    name: "Installation",
  },
  {
    type: "input",
    message: "How is this used?",
    name: "Usage",
  },
  {
    type: "input",
    message: "What Liscense are you using?",
    name: "License",
  },
  {
    type: "input",
    message: "Are you able to have contributors?",
    name: "Contributions",
  },
  {
    type: "input",
    message: "Please provide testing instructions?",
    name: "Testing",
  },
];

const writeFile = (fileName, data) => {}

function askQuestion() {
  inquirer
    .prompt(questions)

    .then((response) => {
      console.log({response}),

      
        fs.writeFile("sample.md", generateMarkdown({...response}),(err) =>
        err ? console.error(err) : console.log('You have created a README'))
    
    });
  
}

// fs.readfile(target titles) .replaceresponse

function init() {
  askQuestion();
}

init();
