module.exports = doGenerateMarkdown;

// Create a function that returns a license badge based on which license is passed in. If there is 
// no license...then return an empty string.
function doRenderLicenseBadge(license) {

}

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
