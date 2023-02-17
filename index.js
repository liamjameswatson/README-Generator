const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the project title",
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
    name: "useage",
  },
  {
    type: "input",
    message: "How do you install you app?",
    name: "installation",
  },
  {
    type: "input",
    message: "Credits?",
    name: "credits",
  },
  {
    type: "input",
    message: "What licence are you using?",
    name: "licence",
    choices: [
      "MIT licence",
      "Apache License 2.0 (Apache-2.0)",
      "GNU General Public License (GPL)",
      "Berkeley Software Distribution License (BSD)",
      "Internet Systems Consortium License (ISC)",
      "N/A",
    ],
  },
  {
    type: "input",
    message: "Enter the website url",
    name: "website-url",
  },
  {
    type: "input",
    message: "Enter the email used for this project",
    name: "email",
  },
  {
    type: "input",
    message: "Any other info (y or n)",
    name: "other",
  },
  // TODO: loop here        loop? when?
  // {
  //   type: "input",
  //   message: "section title",
  //   name: "sectionTitle",
  // },
  // {
  //   type: "input",
  //   message: "section title",
  //   name: "sectionDescription",
  // },
];

// function to write README file
// function writeToFile(fileName, data) {}

// function to initialize program
const init = () =>
  inquirer.prompt(questions)
  .then((answers) => console.log(answers));
  

// function call to initialize program
init();
