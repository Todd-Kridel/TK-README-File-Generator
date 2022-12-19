
// exported module code

module.exports = doGenerateMarkdownText;

// Create a function that returns a license badge based on which license is passed in. If there is 
// no license...then return an empty string.

function doRenderLicenseBadge(license) {
// FOR LICENSES THAT ARE AVAILABLE FOR REPO SELECTION AT GITHUB
// License Information: https://choosealicense.com/licenses
// License Information: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
// SAVED IN THE REPO SUB-FOLDER "TK-README-File-Generator/images/"
switch (license) {
  //
  case "No License":
    return "";
  case "Apache License 2.0":
    return "./images/License_Badge__Apache_2_0.jpg";
  case "GNU General Public License v3.0":
    return "./images/License_Badge__GNU_GPL _v3.jpg";
  case "MIT License":
    return "./images/License_Badge__The_MIT_License.jpg";
  case "BSD 2-Clause 'Simplified' License":
    return "./images/license_Badge__BSD_2-Clause_License.jpg";
  case "BSD 3-Clause 'New' or 'Revised' License":
    return "./images/License_Badge__BSD_3-Clause_License.jpg";
  case "Boost Software License 1.0":
    return ".images/License_Badge__Boost_Software_License_1_0.jpg";
  case "Creative Commons Zero v1.0 Universal":
    return ".images/License_Badge__Creative_Commons_1_0.jpg";
  case "Eclipse Public License 1.0":
    return "./images/License_Badge__Eclipse_Public_License_1_0.jpg";
  case "GNU Affero General Public License v3.0":
    return "./images/License_Badge__GNU_AGPL_v3.jpg";
  case "GNU General Public License v2.0":
    return "./images/License_Badge__GNU_GPL_v2.jpg";
  case "GNU Lesser General Public License v3.0":
    return "./images/License_Badge__GNU_LGPL_v3.jpg";
  case "Mozilla Public License 2.0":
    return "./images/License_Badge__Mozilla_Public_License_2_0.jpg";
  case "The Unlicense":
    return "./images/License_Badge__The_Unlicense.jpg";
  //
}  // END: "license" switch statement
//
}  // END: "license" filename function

// Create a function that returns the license link. If there is no license...then return an empty 
// string.
function doRenderLicenseLink(license) {

}

// Create a function that returns the license section of the README file. If there is no license...
// then return an empty string.
function doRenderLicenseSection(license) {

}

// Create a function that generates the markdown text of the README file.
function doGenerateMarkdown(data) {
  let theProcessedFileContentText = "";
  theProcessedFileContentText = theProcessedFileContentText + data.theProjectTitle + "\n"; 
  theProcessedFileContentText = theProcessedFileContentText + data.theProjectDescription + "\n"; 
  theProcessedFileContentText = theProcessedFileContentText + data.theProgramInstallationInstructions + "\n";  
  theProcessedFileContentText = theProcessedFileContentText + data.TheProgramUsageInformation + "\n"; 
  theProcessedFileContentText = theProcessedFileContentText + data.theProjectContributionGuidelines + "\n"; 
  theProcessedFileContentText = theProcessedFileContentText + data.theProgramTestInstructions + "\n"; 
  theProcessedFileContentText = theProcessedFileContentText + data.theProgramLicense + "\n"; 
  theProcessedFileContentText = theProcessedFileContentText + data.theProgrammerGitHubUserName + "\n"; 
  theProcessedFileContentText = theProcessedFileContentText + data.theProgrammerEmailAddress + "\n"; 
  return theProcessedFileContentText;

// # Contents
//  - [Specification](#specification) 
//  - [Dependencies Title](#dependencies-title) 
// ## Specification
// Example text blah.
// ## Dependencies Title
// Example text blah.

}
