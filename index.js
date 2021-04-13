// TODO: Include packages needed for this application
var inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for the repository',
  },
  {
    type: 'input',
    name: 'installationInstructions',
    message: 'Enter requirements',
  },
  {
    type: 'input',
    name: 'usageInformation',
    message: 'Enter requirements',
  },
  {
    type: 'input',
    name: 'contributionsGuidelines',
    message: 'Enter requirements',
  },
  {
    type: 'input',
    name: 'testIntructions',
    message: 'Enter requirements',
  },
]

inquirer.prompt(questions).then(answers => {
   typeof(answers)
   console.log(answers)
   console.log(answers.description)
   console.log(answers.installationInstructions)
   console.log(answers.usageInformation)
   console.log(answers.contributionsGuidelines)
   console.log(answers.testIntructions)
})

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }

// // TODO: Create a function to initialize app
// function init() {

// }

// // Function call to initialize app
// init();