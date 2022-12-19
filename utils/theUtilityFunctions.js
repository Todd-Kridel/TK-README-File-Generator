
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
  // FOR LICENSES THAT ARE AVAILABLE FOR REPO SELECTION AT GITHUB
  // License Information: https://choosealicense.com/licenses
  // License Information: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  // SAVED IN THE REPO SUB-FOLDER "TK-README-File-Generator/images/"
  switch (license) {
    //
    case "No License":
      return "";
    case "Apache License 2.0":
      return "[!License: Apache License 2.0]" + "(https://opensource.org/licenses/Apache-2.0)";
    case "GNU General Public License v3.0":
      return "[!License: GPL v3]" + "(https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT License":
      return "[!License: MIT License]" + "(https://opensource.org/licenses/MIT)";
    case "BSD 2-Clause 'Simplified' License":
      return "[!License: BSD 2-Clause 'Simplified' License]" + 
        "(https://opensource.org/licenses/BSD-2-Clause)";
    case "BSD 3-Clause 'New' or 'Revised' License":
      return "[!License: BSD 3-Clause 'New' or 'Revised' License]" + 
        "(https://opensource.org/licenses/BSD-3-Clause)";
    case "Boost Software License 1.0":
      return "[!License: Boost Software License 1.0]" + "(https://www.boost.org/LICENSE_1_0.txt)";
    case "Creative Commons Zero v1.0 Universal":
      return "[!License: CC0-1.0]" + "(http://creativecommons.org/publicdomain/zero/1.0/)";
    case "Eclipse Public License 1.0":
      return "[!License: Eclipse Public License 1.0]" + "(https://opensource.org/licenses/EPL-1.0)";
    case "GNU Affero General Public License v3.0":
      return "[!License: AGPL v3]" + "(https://www.gnu.org/licenses/agpl-3.0)";
    case "GNU General Public License v2.0":
      return "[!License: GPL v2]" + "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    case "GNU Lesser General Public License v3.0":
      return "[!License: LGPL v3]" + "(https://www.gnu.org/licenses/lgpl-3.0)";
    case "Mozilla Public License 2.0":
      return "[!License: MPL 2.0]" + "(https://opensource.org/licenses/MPL-2.0)";
    case "The Unlicense":
      return "[!License: Unlicense]" + "(http://unlicense.org/)";
  } // END: "license" switch statement
  } // END: "license" filename function

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
