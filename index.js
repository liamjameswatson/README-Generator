const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the project title?",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a project description",
    name: "description",
  },
  {
    type: "input",
    message: "How do you use your app?",
    name: "usage",
  },
  {
    type: "input",
    message: "How do you install you app?",
    name: "installation",
  },
  {
    type: "input",
    message: "Who was involved in the project?",
    name: "contributing",
  },
  {
    type: "tests",
    message: "What tests are involved in your project?",
    name: "tests",
  },



  {
    type: "list",
    message: "What license are you using?",
    name: "license",
    choices: [
      "MIT",
      "Apache-2.0",
      "Berkeley Software Distribution License (BSD)",
      "Internet Systems Consortium License (ISC)",
      "N/A",
    ],
  },
  {
    type: "input",
    message: "Enter your website url",
    name: "websiteUrl",
  },
  {
    type: "input",
    message: "Enter your github username",
    name: "githubProfile",
  },
  {
    type: "input",
    message: "Enter the email used for this project",
    name: "email",
  },
];

// function to write README file
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      console.log(error);
    }
    console.log("success");
  });
};

// function to initialize program
const init = () =>
  inquirer
    .prompt(questions)

    .then((answers) => writeToFile("README.md", generateMarkdown(answers)));

// function call to initialize program
init();
