// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
// TODO: Create an array of questions for user input

// function to write the Readme files
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/generated-README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};
// function to prompt the questions as well as storing the user input
const init = () => {

    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}

// Function call to initialize app
init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})
