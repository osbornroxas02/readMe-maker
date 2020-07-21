const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Input badge code",
        name: "Badges"
    },
    {
        type: "input",
        message: "What is the Title of your project?",
        name: "Title"
    },
    {
        type: "input",
        message: "Write a description of your project",
        name: "Description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "Installation"
    },
    {
        type: "input",
        message: "Describe the usage.",
        name: "Usage"
    },
    {
        type: "list",
        message: "Select license",
        name: "License",
        choices: [
            "MIT",
            "GVL-GPL 3.0",
            "APACHE 2.0",
            "BSD 3",
            "None"
        ]
    },
    {
        type: "input",
        message: "What are the rules for contributing?",
        name: "Contributing"
    },
    {
        type: "input",
        message: "Who are the authors?",
        name: "Authors"
    },
    {
        type: "input",
        message: "How do you test your project?",
        name: "Test"
    },
    {
        type: "input",
        message: "Enter your Github username",
        name: "Github"
    },
    {
        type: "input",
        message: "Enter your email",
        name: "Email"
    },
    //testing 
    {
        type: 'confirm',
        name: 'confirmTOC',
        message: 'Would you like enter an item for a Table of Content section?',
        default: true
    },
    {
        type: 'input',
        name: 'TOC',
        message: 'Enter in your item.',
        when: ({ confirmTOC }) => confirmTOC
    }   
];

// Function to write file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
        }
    });
}


// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {

        const response = generateMarkdown(answers);
        console.log(answers);

        writeToFile("README.md", response);

    })

}

// function call to initialize program
init();