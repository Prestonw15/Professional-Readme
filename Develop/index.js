// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input

const promptProject = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'Title of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Write a summary of what your project is. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a Description of your Project');
                    return false;
                }
            }
        },
        {
         type: 'checkbox',
         name: 'projectLanguages',
         message: 'What Languages did you use in your application?',
         choices: ['Javascript', 'CSS', 'HTML', 'Node']   
        },
        {
         type: 'input',
         name: 'Packages',
         message: 'What packages or installations will be needed?'   
        },
        {
         type: 'input',
         name: 'usage',
         message: 'What will this project be used for?'   
        },
        {
         type: 'input',
         name: 'userContribution',
         message: 'How can someone contribute?'
        },
        {
         type: 'input',
         name: 'credit',
         message: 'Who worked on this project?'
        },
        {
         type: 'list',
         name: 'license',
         message: 'Select the License for this project?',
         choices: [
             'Apache',
             'GNU',
             'GPL',
             'ISC',
             'MIT',
             'Open',
         ]
        },
        {
         type: 'input',
         name: 'tests',
         message: 'Are there any tests?',
        },
        {
         type: 'input',
         name: 'github',
         message: 'Please enter you Github username'
        },
        {
         type: 'input',
         name: 'email',
         message: 'Please enter your email:'
        }
    ])
};
// function to write the Readme files
const writeFile = (fileName, data) => {

    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your file has been created!')
    })
}
// function to prompt the questions as well as storing the user input
function init() {
    promptProject()
    .then(input =>{
        return generateMarkdown(input);
    })
    .then(markdown => {
        writeFile('readMe.md', markdown);
    })
    .catch(err => {
        console.log(err);
    })
}

// Function call to initialize app
init();

