
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

const theAvailableLicenses = [ 
    "No License",  // 
    "Apache License 2.0",  // 
    "GNU General Public License v3.0",  // 
    "MIT License",  // 
    "BSD 2-Clause 'Simplified' License",  // 
    "BSD 3-Clause 'New' or 'Revised' License",  // 
    "Boost Software License 1.0",  // 
    "Creative Commons Zero v1.0 Universal",  // 
    "Eclipse Public License 2.0",  // 
    "GNU Affero General Public License v3.0",  // 
    "GNU General Public License v2.0",  // 
    "GNU Lesser General Public License v2.1",  // 
    "Mozilla Public License 2.0",  // 
    "The Unlicense"  // 
    ];
    // License Information: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

function doPromptToTheUserToObtainInformation() {
    // Issue a call to the prompt function of the inquirer object to get information for the README file.
    theInquirerObject
    .prompt(theInquirerQuestions)
    .then((answer) => {
        theProcessedFileContentText = "\n";
        theProcessedFileContentText = theProcessedFileContentText + theInquirerQuestions[0].message + ": " + 
        answer.theProjectTitle + "\n"; 
        theProcessedFileContentText = theProcessedFileContentText + theInquirerQuestions[1].message + ": " + 
        answer.theProjectDescription + "\n"; 
        theProcessedFileContentText = theProcessedFileContentText + theInquirerQuestions[2].message + ": " + 
        answer.theProgramInstallationInstructions + "\n";  
        theProcessedFileContentText = theProcessedFileContentText + theInquirerQuestions[3].message + ": " + 
        answer.TheProgramUsageInformation + "\n"; 
        theProcessedFileContentText = theProcessedFileContentText + theInquirerQuestions[4].message + ": " + 
        answer.theProjectContributionGuidelines + "\n"; 
        theProcessedFileContentText = theProcessedFileContentText + theInquirerQuestions[5].message + ": " + 
        answer.theProgramTestInstructions + "\n"; 
        theProcessedFileContentText = theProcessedFileContentText + theInquirerQuestions[6].message + ": " + 
        answer.theProgramLicense + "\n"; 
        theProcessedFileContentText = theProcessedFileContentText + theInquirerQuestions[7].message + ": " + 
        answer.theProgrammerGitHubUserName + "\n"; 
        theProcessedFileContentText = theProcessedFileContentText + theInquirerQuestions[8].message + ": " + 
        answer.theProgrammerEmailAddress + "\n"; 
        //theProcessedFileContentText = <Call to the utility function that generates the file text>;
        //
        // WRITE THE PROCESSED FILE CONTENT TEXT TO THE README FILE.
        doWriteToFile("./README.md", theProcessedFileContentText);
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt could not be rendered in the current environment.
        } else {
            // Something else went wrong.
            console.log("ERROR: Seek Online Help Immediately!!!");
        };
    });
    }

function doWriteToFile(theFileName, theData) {
    console.log("SOME FILE WRITE PROCESSING OCCURS: creating file '" + theFileName + 
        "' and saving the inputted information '" + theData + "'" + "\n");
    theFileSystemObject.writeFile(theFileName, theData, (error) => {
        error ? console.error(error) : console.log("Successfully created the new README file!")});
    }
    
// Create a function that initializes the application.
    
function doInitializeTheApplication() {
    console.log("SOME PROGRAM INITIALIZATION PROCESSING OCCURS.");
    doPromptToTheUserToObtainInformation();
    }

////////////////

// Issue a call to the initialization function to initialize the application.

doInitializeTheApplication();
    
////////////////

