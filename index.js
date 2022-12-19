// Include packages that are needed for the application.

const theInquirerObject = require("inquirer");
const theFileSystemObject = require("fs");
const theUtilityFunctionsObject = require(".//utils/theUtilityFunctions");
const { title } = require("process");

let theProcessedFileContentText = "";

// Create an array of questions that are to be asked for the creation of the README file.

const theInquirerQuestions = [
    {
    name: "theProjectTitle",
    type: "input",
    message: "What is the project/document title?"
    }, 
    {
    name: "theProjectDescription",
    type: "input",
    message: "What is the starting description text that is for the new program?"
    }, 
    {
    name: "theProgramInstallationInstructions", 
    type: "input", 
    message: "What special installation instructions, if any, apply to the project program?"
    }, 
    {
    name: "TheProgramUsageInformation",
    type: "input",
    message: "What special usage information applies to the project program?"
    }, 
    {
    name: "theProjectContributionGuidelines", 
    type: "input", 
    message: "What contribution guidelines, if any, apply to the project program?"
    }, 
    {
    name: "theProgramTestInstructions", 
    type: "input", 
    message: "What special test instructions, if any, apply to the project program?"
    }, 
    {
    name: "theProgramLicense", 
    type: "list", 
    message: "What license is applicable to the project program?", 
    choices: theAvailableLicenses
    }, 
    {
    name: "theProgrammerGitHubUserName", 
    type: "input", 
    message: "What is the programmer's GitHub user name?"
    }, 
    {
    name: "theProgrammerEmailAddress", 
    type: "input", 
    message: "What is the programmer's email address?"
    }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
