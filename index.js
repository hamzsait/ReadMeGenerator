// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const markdown = require('./markdown.js')
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter a title for the repository:',
    validate: ((userData) => {
      return userData.length < 0 ? console.log('Please enter a valid entry.') : true
    })
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for the repository:',
    validate: ((userData) => {
      return userData.length < 0 ? console.log('Please enter a valid entry.') : true
    })
  },
  {
    type: 'input',
    name: 'installationInstructions',
    message: 'Enter installation requirements:',
    validate: ((userData) => {
      return userData.length < 0 ? console.log('Please enter a valid entry.') : true
    })
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Select liscences:',
    choices: ['Apache', 'Boost', 'Eclipse','IBM','ISC','MIT','Mozilla','Perl']
  },
  {
    type: 'input',
    name: 'usageInformation',
    message: 'Enter usage information:',
    validate: ((userData) => {
      return userData.length < 0 ? console.log('Please enter a valid entry.') : true
    })
  },
  {
    type: 'input',
    name: 'contributionGuidelines',
    message: 'Enter contribution guidelines:',
    validate: ((userData) => {
      return userData.length < 0 ? console.log('Please enter a valid entry.') : true
    })
  },
  {
    type: 'input',
    name: 'testIntructions',
    message: 'Enter test Instructions:',
    validate: ((userData) => {
      return userData.length < 0 ? console.log('Please enter a valid entry.') : true
    })
  },
]



// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }

// // TODO: Create a function to initialize app

function init() {
  inquirer.prompt(questions).then(answers => {
    data = markdown.generateMarkdown(answers)
    fs.writeFile("README.md",data, (err) => {
      console.log(err)
    })
 })
}

init();