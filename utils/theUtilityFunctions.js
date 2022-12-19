
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
      return "[!License: MIT License]" + "(https://opensource.org/licenses/MIT)" + 
      "\n" + 
      "(A COMMON OPTION FOR BEGINNER CODING PROJECTS)" + "\n" + 
      "\n" + 
      doShowMITLicenseText();
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
  //console.log("doRenderLicenseSection(license) processing: " + license);
  //
  let theProcessedSectionText = "";
  //
  if (license != "No License") {
    theProcessedSectionText = theProcessedSectionText + 
    "(\"" + `${doRenderLicenseBadge(license)}` + "\")" + "    " + `${license}` + 
    "\n";
    // "theProgramLicense"
  }
  else {
    theProcessedSectionText = theProcessedSectionText + `${license}` + "\n";
    // "theProgramLicense"
  }
  theProcessedSectionText = theProcessedSectionText + "\n";
  theProcessedSectionText = theProcessedSectionText + 
    "License Text:" + "\n";
    theProcessedSectionText = theProcessedSectionText + "\n";
  let theLicenseTextProcessing = doRenderLicenseLink(license);
  if (theLicenseTextProcessing != "") {
    theProcessedSectionText = theProcessedSectionText + theLicenseTextProcessing;
  }
  else {
    theProcessedSectionText = theProcessedSectionText + "None -- NA" + "\n";
  }
  //
  return (theProcessedSectionText);
  }
  
// Have a function that provides the text of the MIT license that is used at most often by 
// beginner programs.

function doShowMITLicenseText() {
let theLicenseText = 
"MIT License" + "\n" + 
"\n" + 
"Copyright (c) [year] [fullname]" + "\n" + 
"" + "\n" + 
"Permission is hereby granted, free of charge, to any person obtaining a copy" + "\n" + 
"of this software and associated documentation files (the \"Software\"), to deal" + "\n" + 
"in the Software without restriction, including without limitation the rights" + "\n" + 
"to use, copy, modify, merge, publish, distribute, sublicense, and/or sell" + "\n" + 
"copies of the Software, and to permit persons to whom the Software is" + "\n" + 
"furnished to do so, subject to the following conditions:" + "\n" + 
"" + "\n" + 
"The above copyright notice and this permission notice shall be included in all" + "\n" + 
"copies or substantial portions of the Software." + "\n" + 
"" + "\n" + 
"THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR" + "\n" + 
"IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY," + "\n" + 
"FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE" + "\n" + 
"AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER" + "\n" + 
"LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM," + "\n" + 
"OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE" + "\n" + 
"SOFTWARE." + "\n" + 
"" + "\n" + 
"For more information (and updated text), please refer to https://opensource.org/licenses/MIT." + "\n";
//
return (theLicenseText);
}

// Create a function that generates the markdown text of the README file.
function doGenerateMarkdownText(theAnswerData) {
  //console.log("doGenerateMarkdown(theAnswerData) processing");
  //
  let theProcessedMarkdownText = "";
  //
  theProcessedMarkdownText = theProcessedMarkdownText + 
    "# -- The Project README File --" + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + 
    "(updated as of MM/DD/YYYYY)" + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + 
    `# The Project Title: ${theAnswerData.theProjectTitle}`;
    // "theProjectTitle"
  
  if (theAnswerData.theProgramLicense != "No License") {
    theProcessedMarkdownText = theProcessedMarkdownText + "        " + 
      "(\"" + `${doRenderLicenseBadge(theAnswerData.theProgramLicense)}` + "\")" + "\n";
      // "theProgramLicense"
    }
    else {
      theProcessedMarkdownText = theProcessedMarkdownText + "\n";
    }
  theProcessedMarkdownText = theProcessedMarkdownText + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + 
    "--------------------------------" + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + 
    "## README File Table of Contents" + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + "\n" + 
    "[1. Project/Program Description](\"##1. Project/Program Description\")" + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + "\n" + 
    "[2. Program Installation Information](\"##2. Program Installation Information\")" + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + "\n" + 
    "[3. Program Usage Information](\"##3. Program Usage Information\")" + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + "\n" + 
    "[4. Program Credits/Contributors](\"##4. Program Credits/Contributors\")" + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + "\n" + 
    "[5. Program Test Information](\"##5. Program Test Information\")" + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + "\n" + 
    "[6. Program Questions](\"##6. Program Questions\")" + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + "\n" + 
    "[7. Program License Information](\"##7. Program License Information\")" + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + 
    "--------------------------------" + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + 
    "## 1. The Program Description:" + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + 
    `${theAnswerData.theProjectDescription}` + "\n";
    // "theProjectDescription"
  theProcessedMarkdownText = theProcessedMarkdownText + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + 
    "## 2. Program Installation Information" + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + 
    `${theAnswerData.theProgramInstallationInstructions}` + "\n";
    // "theProgramInstallationInstructions"
  theProcessedMarkdownText = theProcessedMarkdownText + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + 
    "## 3. Program Usage Information" + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + 
    `${theAnswerData.TheProgramUsageInformation}` + "\n";
    // "TheProgramUsageInformation"
  theProcessedMarkdownText = theProcessedMarkdownText + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + 
    "## 4. Program Credits/Contributors" + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + 
    `${theAnswerData.theProjectCreditsContributionInformation}` + "\n";
    // "theProjectCreditsContributionInformation"
  theProcessedMarkdownText = theProcessedMarkdownText + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + 
    "## 5. Program Test Information" + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + 
    `${theAnswerData.theProgramTestInstructions}` + "\n";
    // "theProgramTestInstructions" 
  theProcessedMarkdownText = theProcessedMarkdownText + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + 
    "## 6. Program Questions" + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + 
    `Programmer Email Address: ${theAnswerData.theProgrammerEmailAddress}` + "\n";
    // "theProgrammerEmailAddress"
  theProcessedMarkdownText = theProcessedMarkdownText + 
    `Programmer GitHub User Name: ${theAnswerData.theProgrammerGitHubUserName}` + "\n";
    // "theProgrammerGitHubUserName"
  theProcessedMarkdownText = theProcessedMarkdownText + "\n" + 
    "## 7. Program License Information" + "\n";
  theProcessedMarkdownText = theProcessedMarkdownText + 
    doRenderLicenseSection(theAnswerData.theProgramLicense);
  //
  return (theProcessedMarkdownText);
  }
  