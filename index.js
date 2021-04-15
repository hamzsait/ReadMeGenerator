// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const markdown = require('./markdown.js')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter a title for the repository:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for the repository:',
  },
  {
    type: 'input',
    name: 'installationInstructions',
    message: 'Enter installation requirements:',
  },
  {
    type: 'input',
    name: 'usageInformation',
    message: 'Enter usage information:',
  },
  {
    type: 'input',
    name: 'contributionsGuidelines',
    message: 'Enter contribution guidelines:',
  },
  {
    type: 'input',
    name: 'testIntructions',
    message: 'Enter test Instructions:',
  },
]



// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }

// // TODO: Create a function to initialize app

function init() {
  inquirer.prompt(questions).then(answers => {
    markdown.generateMarkdown(answers)
 })
}

init();