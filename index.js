

// Include packages that are needed for the application.

const theInquirerObject = require("inquirer");
const theFileSystemObject = require("fs");
const theUtilityFunctionsObject = require("./utils/theUtilityFunctions");
const doGenerateMarkdownText = require("./utils/theUtilityFunctions");
const { title } = require("process");


// Have variables for processing in the main block of the program.

let theProcessedFileContentText = "";


// Create an array of the names of all of the code-post licenses that are available for 
// repositories at GitHub.

const theAvailableLicenses = [  // LICENSES THAT ARE AVAILABLE FOR REPO SELECTION AT GITHUB
// License Information: https://choosealicense.com/licenses
// License Information: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
//
// SAVED IN THE REPO SUB-FOLDER "TK-README-File-Generator/images/"
"No License",  // License_Badge__None.jpg
  // No supplemental text.
"Apache License 2.0",  // License_Badge__Apache_2_0.jpg
  // [![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]
  // (https://opensource.org/licenses/Apache-2.0)
"GNU General Public License v3.0",  // License_Badge__GNU_GPL _v3.jpg
  // [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]
  // (https://www.gnu.org/licenses/gpl-3.0)
"MIT License",  // License_Badge__The_MIT_License.jpg
  // [![License: MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)]
  // (https://opensource.org/licenses/MIT)
"BSD 2-Clause 'Simplified' License",  // License_Badge__BSD_2-Clause_License.jpg
  // [![License: 2-Clause 'Simplified' License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]
  // (https://opensource.org/licenses/BSD-2-Clause)
"BSD 3-Clause 'New' or 'Revised' License",  // License_Badge__BSD_3-Clause_License.jpg
  // [![License: 3-Clause 'New' or 'Revised' License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]
  // (https://opensource.org/licenses/BSD-3-Clause)
"Boost Software License 1.0",  // License_Badge__Boost_Software_License_1_0.jpg
  // [![License: Boost Software License 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]
  // (https://www.boost.org/LICENSE_1_0.txt)
"Creative Commons Zero v1.0 Universal",  // License_Badge__Creative_Commons_1_0.jpg
  // [![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]
  // (http://creativecommons.org/publicdomain/zero/1.0/)
"Eclipse Public License 1.0",  // License_Badge__Eclipse_Public_License_1_0.jpg
  // [![License: Eclipse Public License 1.0](https://img.shields.io/badge/License-EPL_1.0-red.svg)]
  // (https://opensource.org/licenses/EPL-1.0)
"GNU Affero General Public License v3.0",  // License_Badge__GNU_AGPL_v3.jpg
  // [![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]
  // (https://www.gnu.org/licenses/agpl-3.0)
"GNU General Public License v2.0",  // License_Badge__GNU_GPL_v2.jpg
  // [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]
  // (https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
"GNU Lesser General Public License v3.0",  // License_Badge__GNU_LGPL_v3.jpg
  // [![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]
  // (https://www.gnu.org/licenses/lgpl-3.0)
"Mozilla Public License 2.0",  // License_Badge__Mozilla_Public_License_2_0.jpg
  // [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]
  // (https://opensource.org/licenses/MPL-2.0)
"The Unlicense"  // License_Badge__The_Unlicense.jpg
  // [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]
  // (http://unlicense.org/)
];  // END: license options array definition


// Create an array of the details of all of the questions that are to be asked for the creation 
// of the README file.

const theInquirerQuestions = [
// "theProjectTitle"
// "theProjectDescription"
// "theProgramInstallationInstructions" 
// "TheProgramUsageInformation"
// "theProjectCreditsContributionInformation" 
// "theProgramTestInstructions" 
// "theProgramLicense"
// "theProgrammerGitHubUserName"
// "theProgrammerEmailAddress"
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
name: "theProjectCreditsContributionInformation", 
type: "input", 
message: "What credits/contributions details, if any, apply to the project program?"
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


// Create a function that will get from the user the information that is necessary for processing 
// the README file.

function doGetInformationFromTheUserForProcessingTheReadmeFile() {
// Issue a call to the prompt function of the inquirer object to get information for the README file.
theInquirerObject
.prompt(theInquirerQuestions)
.then((answers) => {
  // Call to the utility function that generates the README file text based on the user input.
  theProcessedFileContentText = doGenerateMarkdownText(answers);
  //console.log(theProcessedFileContentText);
  //
  // Write the processed file content to the README file.
  doWriteToFile("./README.md", theProcessedFileContentText);
})
.catch((error) => {
    if (error.isTtyError) {
      // Prompt could not be rendered in the current environment.
    } else {
      // A problem occurred with the utility-function processing of the prompt answer data.
      console.log("ERROR: A problem occurred with the processing of the prompt answer data.");
    };
});
}


// Create a function that writes question answer data to the README file.

function doWriteToFile(theFileName, theData) {
console.log("SOME FILE WRITE PROCESSING OCCURRED: Created file '" + theFileName + 
  "' and saving the inputted information '" + "\n");
theFileSystemObject.writeFile(theFileName, theData, (error) => {
  error ? console.error(error) : console.log("Successfully created the new README file!")});
//
// AN POSSIBLE ALTERNATE PROMPT-THEN-PROCESS APPROACH:
// const init = () => {
//   promptUser()
//     // Use writeFile method imported from fs.promises to use promises instead of
//     // a callback function
//     .then((answers) => writeFile('index.html', generateHTML(answers)))
//     .then(() => console.log('Successfully wrote to index.html'))
//     .catch((err) => console.error(err));
// };
}


// Create a function that initializes/starts the application.

function doInitializeInitiateTheApplication() {
doGetInformationFromTheUserForProcessingTheReadmeFile();
//console.log("THE PROGRAM INITIALIZATION PROCESSING OCCURRED.");
}


////////////////
// START: THE PROGRAM
////////////////


// Issue a call to the initialization function to start the application processing.

doInitializeInitiateTheApplication();


////////////////
// END: THE PROGRAM
////////////////


// OTHER TEXT THAT IS FOR THE README FILE

/*

User Story:

AS A developer...I WANT a README generator...SO THAT I can quickly create a professional 
README for a new project.

Acceptance Criteria:

GIVEN a command-line application that accepts user input...
-
* WHEN I am prompted for information about my application repository...THEN a high-quality, 
professional README.md is generated with the title of my project and sections entitled 
Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and 
Questions sections.
* WHEN I enter my project title...THEN this is displayed as the title of the README.
* WHEN I enter a description, installation instructions, usage information, contribution 
guidelines, and test instructions...THEN this information is added to the sections of the 
README entitled Description, Installation, Usage, Contributing, and Tests.
* WHEN I choose a license for my application from a list of options...THEN a badge for that 
license is added near the top of the README and a notice is added to the section of the README 
entitled License that explains which license the application is covered under.
* WHEN I enter my GitHub username...THEN this is added to the section of the README entitled 
Questions, with a link to my GitHub profile.
* WHEN I enter my email address...THEN this is added to the section of the README entitled 
Questions, with instructions on how to reach me with additional questions.
* WHEN I click on the links in the Table of Contents...THEN I am taken to the corresponding 
section of the README.

IMPORTANT NOTES:

* All activities using the inquirer package will need to use version 8.2.4. The latest version 
of inquirer (version 9+) introduces breaking changes to activities. All activities have 
version 8.2.4 in their respective package.json files but should you install inquirer, use 
npm i inquirer@8.2.4; Inquirer package download site: 
https://www.npmjs.com/package/inquirer/v/8.2.4.

* Create a .gitignore file and include node_modules/ and .DS_Store/ so that your node_modules 
directory isn't tracked or uploaded to GitHub. Be sure to create your .gitignore file before 
installing any npm dependencies.

* Make sure that your repo includes a package.json with the required dependencies. You can 
create one by running npm init when you first set up the project, before installing any 
dependencies.

* Include a video of the typical user flow through your application. This includes views of the 
prompts and the responses after their selection. Refer to the Video Submission Guide Links to 
an external site on the Full-Stack Blog for additional guidance on creating a video.

Include any other screenshots you deem necessary to help someone who has never been introduced 
to your application understand the purpose and function of it. This is how you will communicate 
to potential employers or other developers in the future what you built and why, and to show 
how it works.

Deliverables:

* A sample README generated using the application must be submitted.

* Your GitHub repository containing your application code.

*A walk-through video that demonstrates the functionality of the README generator must be 
submitted and a link to the video should be included in your README file. The walk-through 
video must demonstrate how a user would invoke the application from the command line. The 
walk-through video must demonstrate how a user would enter responses to all of the prompts in 
the application. The walk-through video must demonstrate a generated README that matches the 
user input and has a functioning table of contents.

*/

