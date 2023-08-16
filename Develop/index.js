// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please name your Project',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please describe the purpose and functionality of this project.',
        name: 'description',
      },
      {
        type: 'checkbox',
        message: 'Please select a license applicable to this project.',
        name: 'License',
        chioces: ['MIT','APACHE2.0','Boost1.0','MPL2.0','BSD2','BSD3','none'],
      },
      {
        type: 'input',
        message: 'List any project dependencies here.',
        name: 'require',
      },
      {
        type: 'input',
        message: 'State the languages or technologies associated with this project.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'creator',
      },
      {
        type: 'input',
        message: 'State your full name.',
        name: 'name',
      },
      {
        type: 'input',
        message: 'Provide a valid email address',
        name: 'email',
      },
      {
        type: 'input',
        message: 'Provide walkthrough of required test if applicable.',
        name: 'test',
      },
];


// Writing README.md File
function writeToFile(fileName,data) {
  return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// Initalizing app
function init()