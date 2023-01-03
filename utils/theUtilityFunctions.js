

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
    return "![a license icon](./images/License_Badge__Apache_2_0.jpg)";
  case "GNU General Public License v3.0":
    return "![a license icon](./images/License_Badge__GNU_GPL _v3.jpg)";
  case "MIT License":
    return "![a license icon](./images/License_Badge__The_MIT_License.jpg)";
  case "BSD 2-Clause 'Simplified' License":
    return "![a license icon](./images/license_Badge__BSD_2-Clause_License.jpg)";
  case "BSD 3-Clause 'New' or 'Revised' License":
    return "![a license icon](./images/License_Badge__BSD_3-Clause_License.jpg)";
  case "Boost Software License 1.0":
    return "![a license icon](./images/License_Badge__Boost_Software_License_1_0.jpg)";
  case "Creative Commons Zero v1.0 Universal":
    return "![a license icon](./images/License_Badge__Creative_Commons_1_0.jpg)";
  case "Eclipse Public License 1.0":
    return "![a license icon](./images/License_Badge__Eclipse_Public_License_1_0.jpg)";
  case "GNU Affero General Public License v3.0":
    return "![a license icon](./images/License_Badge__GNU_AGPL_v3.jpg)";
  case "GNU General Public License v2.0":
    return "![a license icon](./images/License_Badge__GNU_GPL_v2.jpg)";
  case "GNU Lesser General Public License v3.0":
    return "![a license icon](./images/License_Badge__GNU_LGPL_v3.jpg)";
  case "Mozilla Public License 2.0":
    return "![a license icon](./images/License_Badge__Mozilla_Public_License_2_0.jpg)";
  case "The Unlicense":
    return "![a license icon](./images/License_Badge__The_Unlicense.jpg)";
  //
}  // END: "license" switch statement
//
// switch (license) {  // ALTERNATIVE LINK-REFERENCE METHOD
//     //
//   case "No License":
//     return "";
//   case "Apache License 2.0":
//     return "[License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
//   case "GNU General Public License v3.0":
//     return "[License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
//   case "MIT License":
//     return "[License: MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)";
//   case "BSD 2-Clause 'Simplified' License":
//     return "[License: BSD 2-Clause 'Simplified' License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)";
//   case "BSD 3-Clause 'New' or 'Revised' License":
//     return "[License: BSD 3-Clause 'New' or 'Revised' License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
//   case "Boost Software License 1.0":
//     return "[License: Boost Software License 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
//   case "Creative Commons Zero v1.0 Universal":
//     return "[License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)";
//   case "Eclipse Public License 1.0":
//     return "[License: Eclipse Public License 1.0](https://img.shields.io/badge/License-EPL_1.0-red.svg)";
//   case "GNU Affero General Public License v3.0":
//     return "[License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)";
//   case "GNU General Public License v2.0":
//     return "[License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)";
//   case "GNU Lesser General Public License v3.0":
//     return "[License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)";
//   case "Mozilla Public License 2.0":
//     return "[License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
//   case "The Unlicense":
//     return "[License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
//     //
// } // END: "license" switch statement
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
    return "[License: Apache License 2.0]" + "(https://opensource.org/licenses/Apache-2.0)";
  case "GNU General Public License v3.0":
    return "[License: GPL v3]" + "(https://www.gnu.org/licenses/gpl-3.0)";
  case "MIT License":
    return "[License: MIT License]" + "(https://opensource.org/licenses/MIT)" + "\n" + 
      "\n" + 
      "(A COMMON LICENSE OPTION FOR BEGINNER/BASIC PROGRAM PROJECTS)" + "\n" + 
      "\n" + 
      doShowMITLicenseText();
  case "BSD 2-Clause 'Simplified' License":
    return "[License: BSD 2-Clause 'Simplified' License]" + 
      "(https://opensource.org/licenses/BSD-2-Clause)";
  case "BSD 3-Clause 'New' or 'Revised' License":
    return "[License: BSD 3-Clause 'New' or 'Revised' License]" + 
      "(https://opensource.org/licenses/BSD-3-Clause)";
  case "Boost Software License 1.0":
    return "[License: Boost Software License 1.0]" + "(https://www.boost.org/LICENSE_1_0.txt)";
  case "Creative Commons Zero v1.0 Universal":
    return "[License: CC0-1.0]" + "(http://creativecommons.org/publicdomain/zero/1.0/)";
  case "Eclipse Public License 1.0":
    return "[License: Eclipse Public License 1.0]" + "(https://opensource.org/licenses/EPL-1.0)";
  case "GNU Affero General Public License v3.0":
    return "[License: AGPL v3]" + "(https://www.gnu.org/licenses/agpl-3.0)";
  case "GNU General Public License v2.0":
    return "[License: GPL v2]" + "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
  case "GNU Lesser General Public License v3.0":
    return "[License: LGPL v3]" + "(https://www.gnu.org/licenses/lgpl-3.0)";
  case "Mozilla Public License 2.0":
    return "[License: MPL 2.0]" + "(https://opensource.org/licenses/MPL-2.0)";
  case "The Unlicense":
    return "[License: Unlicense]" + "(http://unlicense.org/)";
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
  `${doRenderLicenseBadge(license)}` + "\n";
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
  "# ——— The Program README File ———" + "\n";
theProcessedMarkdownText = theProcessedMarkdownText + 
  "(updated as of MM/DD/YYYY)" + "\n";
theProcessedMarkdownText = theProcessedMarkdownText + "\n";
theProcessedMarkdownText = theProcessedMarkdownText + "\n";
theProcessedMarkdownText = theProcessedMarkdownText + 
  `# Program Title: ${theAnswerData.theProjectTitle}` + "\n";
  // "theProjectTitle"

if (theAnswerData.theProgramLicense != "No License") {
  theProcessedMarkdownText = theProcessedMarkdownText + 
    `${doRenderLicenseBadge(theAnswerData.theProgramLicense)}` + "\n";
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
  "## Table of Contents" + "\n";
theProcessedMarkdownText = theProcessedMarkdownText + "\n" + 
  "[1. Project/Program Description](#1-ProjectProgram-Description)" + "\n";
theProcessedMarkdownText = theProcessedMarkdownText + "\n" + 
  "[2. Program Installation Information](#2-Program-Installation-Information)" + "\n";
theProcessedMarkdownText = theProcessedMarkdownText + "\n" + 
  "[3. Program Usage Information](#3-Program-Usage-Information)" + "\n";
theProcessedMarkdownText = theProcessedMarkdownText + "\n" + 
  "[4. Program Credits/Contributors](#4-Program-CreditsContributors)" + "\n";
theProcessedMarkdownText = theProcessedMarkdownText + "\n" + 
  "[5. Program Test Information](#5-Program-Test-Information)" + "\n";
theProcessedMarkdownText = theProcessedMarkdownText + "\n" + 
  "[6. Program Questions](#6-Program-Questions)" + "\n";
theProcessedMarkdownText = theProcessedMarkdownText + "\n" + 
  "[7. Program License Information](#7-Program-License-Information)" + "\n";
theProcessedMarkdownText = theProcessedMarkdownText + "\n";
theProcessedMarkdownText = theProcessedMarkdownText + 
  "--------------------------------" + "\n";
theProcessedMarkdownText = theProcessedMarkdownText + "\n";
theProcessedMarkdownText = theProcessedMarkdownText + 
  "## 1. Project/Program Description:" + "\n";
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
  `Programmer Email Address: ${theAnswerData.theProgrammerEmailAddress}` + "    " + "\n";
  // "theProgrammerEmailAddress"
theProcessedMarkdownText = theProcessedMarkdownText + 
  `Programmer GitHub User Name: https://github.com/${theAnswerData.theProgrammerGitHubUserName}` + "\n";
  // "theProgrammerGitHubUserName"
theProcessedMarkdownText = theProcessedMarkdownText + "\n" + 
  "## 7. Program License Information" + "\n";
theProcessedMarkdownText = theProcessedMarkdownText + 
  doRenderLicenseSection(theAnswerData.theProgramLicense);
//
return (theProcessedMarkdownText);
}


// exported module code

module.exports = doGenerateMarkdownText;


// POSSIBLE GITHUB API CODE FOR DYNAMICALLY LOADING CURRENT LICENSE TEXT


//https://docs.github.com/en/rest/licenses?apiVersion=2022-11-28#get-a-license--code-samples
//
// Get a license
// Works with GitHub Apps
// Parameters
// Headers
// Name, Type, Description
// acceptstring
// Setting to application/vnd.github+json is recommended.

// Path parameters
// Name, Type, Description
// licensestringRequired
// HTTP response status codes
// Status code	Description
// 200	
// OK

// 304	
// Not modified

// 403	
// Forbidden

// 404	
// Resource not found

// Code samples
// GET
// /licenses/{license}
// cURL
// JavaScript
// GitHub CLI

// // Octokit.js
// // https://github.com/octokit/core.js#readme
// const octokit = new Octokit({
//   auth: 'YOUR-TOKEN'
// })

// await octokit.request('GET /licenses/{license}', {
//   license: 'LICENSE'
// })
// Response

// Example response
// Response schema
// Status: 200
// {
//   "key": "mit",
//   "name": "MIT License",
//   "spdx_id": "MIT",
//   "url": "https://api.github.com/licenses/mit",
//   "node_id": "MDc6TGljZW5zZW1pdA==",
//   "html_url": "http://choosealicense.com/licenses/mit/",
//   "description": "A permissive license that is short and to the point. It lets people do anything with your code with proper attribution and without warranty.",
//   "implementation": "Create a text file (typically named LICENSE or LICENSE.txt) in the root of your source code and copy the text of the license into the file. Replace [year] with the current year and [fullname] with the name (or names) of the copyright holders.",
//   "permissions": [
//     "commercial-use",
//     "modifications",
//     "distribution",
//     "sublicense",
//     "private-use"
//   ],
//   "conditions": [
//     "include-copyright"
//   ],
//   "limitations": [
//     "no-liability"
//   ],
//   "body": "\n\nThe MIT License (MIT)\n\nCopyright (c) [year] [fullname]\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n",
//   "featured": true
// }


////////////////


// https://docs.github.com/en/developers/apps/building-github-apps/authenticating-with-github-apps
//
// Authenticating with GitHub Apps
// In this article
// Generating a private key
// Verifying private keys
// Deleting private keys
// Authenticating as a GitHub App
// Accessing API endpoints as a GitHub App
// Authenticating as an installation
// Accessing API endpoints as an installation
// HTTP-based Git access by an installation
// You can authenticate as a GitHub App or as an installation.

// Generating a private key
// After you create a GitHub App, you'll need to generate one or more private keys. You'll use the private key to sign access token requests.

// You can create multiple private keys and rotate them to prevent downtime if a key is compromised or lost. To verify that a private key matches a public key, see Verifying private keys.

// To generate a private key:

// In the upper-right corner of any page, click your profile photo, then click Settings.

// Settings icon in the user bar

// In the left sidebar, click  Developer settings.

// In the left sidebar, click GitHub Apps.
// GitHub Apps section

// To the right of the GitHub App you want to modify, click Edit.
// App selection

// In "Private keys", click Generate a private key.
// Generate private key

// You will see a private key in PEM format downloaded to your computer. Make sure to store this file because GitHub only stores the public portion of the key.

// Note: If you're using a library that requires a specific file format, the PEM file you download will be in PKCS#1 RSAPrivateKey format.

// Verifying private keys
// GitHub generates a fingerprint for each private and public key pair using the SHA-256 hash function. You can verify that your private key matches the public key stored on GitHub by generating the fingerprint of your private key and comparing it to the fingerprint shown on GitHub.

// To verify a private key:

// Find the fingerprint for the private and public key pair you want to verify in the "Private keys" section of your GitHub App's developer settings page. For more information, see Generating a private key.
// Private key fingerprint
// Generate the fingerprint of your private key (PEM) locally by using the following command:
// $ openssl rsa -in PATH_TO_PEM_FILE -pubout -outform DER | openssl sha256 -binary | openssl base64
// Compare the results of the locally generated fingerprint to the fingerprint you see in GitHub.
// Deleting private keys
// You can remove a lost or compromised private key by deleting it, but you must have at least one private key. When you only have one key, you will need to generate a new one before deleting the old one. Deleting last private key


////////////////


// core.js
// Extendable client for GitHub's REST & GraphQL APIs

// @latest Build Status

// Usage
// REST API example
// GraphQL example
// Options
// Defaults
// Authentication
// Logging
// Hooks
// Plugins
// Build your own Octokit with Plugins and Defaults
// LICENSE
// If you need a minimalistic library to utilize GitHub's REST API and GraphQL API which you can extend with plugins as needed, then @octokit/core is a great starting point.

// If you don't need the Plugin API then using @octokit/request or @octokit/graphql directly is a good alternative.

// Usage
// Browsers	Load @octokit/core directly from cdn.skypack.dev
// <script type="module">
// import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
// </script>
// Node	
// Install with npm install @octokit/core

// const { Octokit } = require("@octokit/core");
// // or: import { Octokit } from "@octokit/core";
// REST API example
// // Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
// const octokit = new Octokit({ auth: `personal-access-token123` });

// const response = await octokit.request("GET /orgs/{org}/repos", {
//   org: "octokit",
//   type: "private",
// });
// See @octokit/request for full documentation of the .request method.

// GraphQL example
// const octokit = new Octokit({ auth: `secret123` });

// const response = await octokit.graphql(
//   `query ($login: String!) {
//     organization(login: $login) {
//       repositories(privacy: PRIVATE) {
//         totalCount
//       }
//     }
//   }`,
//   { login: "octokit" }
// );
// See @octokit/graphql for full documentation of the .graphql method.

// Options
// name	type	description
// options.authStrategy	Function	Defaults to @octokit/auth-token. See Authentication below for examples.
// options.auth	String or Object	See Authentication below for examples.
// options.baseUrl	String	
// When using with GitHub Enterprise Server, set options.baseUrl to the root URL of the API. For example, if your GitHub Enterprise Server's hostname is github.acme-inc.com, then set options.baseUrl to https://github.acme-inc.com/api/v3. Example

// const octokit = new Octokit({
//   baseUrl: "https://github.acme-inc.com/api/v3",
// });
// options.previews	Array of Strings	
// Some REST API endpoints require preview headers to be set, or enable additional features. Preview headers can be set on a per-request basis, e.g.

// octokit.request("POST /repos/{owner}/{repo}/pulls", {
//   mediaType: {
//     previews: ["shadow-cat"],
//   },
//   owner,
//   repo,
//   title: "My pull request",
//   base: "master",
//   head: "my-feature",
//   draft: true,
// });
// You can also set previews globally, by setting the options.previews option on the constructor. Example:

// const octokit = new Octokit({
//   previews: ["shadow-cat"],
// });
// options.request	Object	
// Set a default request timeout (options.request.timeout) or an http(s).Agent e.g. for proxy usage (Node only, options.request.agent).

// There are more options.request.* options, see @octokit/request options. options.request can also be set on a per-request basis.

// options.timeZone	String	
// Sets the Time-Zone header which defines a timezone according to the list of names from the Olson database.

// const octokit = new Octokit({
//   timeZone: "America/Los_Angeles",
// });
// The time zone header will determine the timezone used for generating the timestamp when creating commits. See GitHub's Timezones documentation.

// options.userAgent	String	
// A custom user agent string for your app or library. Example

// const octokit = new Octokit({
//   userAgent: "my-app/v1.2.3",
// });
// Defaults
// You can create a new Octokit class with customized default options.

// const MyOctokit = Octokit.defaults({
//   auth: "personal-access-token123",
//   baseUrl: "https://github.acme-inc.com/api/v3",
//   userAgent: "my-app/v1.2.3",
// });
// const octokit1 = new MyOctokit();
// const octokit2 = new MyOctokit();
// If you pass additional options to your new constructor, the options will be merged shallowly.

// const MyOctokit = Octokit.defaults({
//   foo: {
//     opt1: 1,
//   },
// });
// const octokit = new MyOctokit({
//   foo: {
//     opt2: 1,
//   },
// });
// // options will be { foo: { opt2: 1 }}
// If you need a deep or conditional merge, you can pass a function instead.

// const MyOctokit = Octokit.defaults((options) => {
//   return {
//     foo: Object.assign({}, options.foo, { opt1: 1 }),
//   };
// });
// const octokit = new MyOctokit({
//   foo: { opt2: 1 },
// });
// // options will be { foo: { opt1: 1, opt2: 1 }}
// Be careful about mutating the options object in the Octokit.defaults callback, as it can have unforeseen consequences.

// Authentication
// Authentication is optional for some REST API endpoints accessing public data, but is required for GraphQL queries. Using authentication also increases your API rate limit.

// By default, Octokit authenticates using the token authentication strategy. Pass in a token using options.auth. It can be a personal access token, an OAuth token, an installation access token or a JSON Web Token for GitHub App authentication. The Authorization header will be set according to the type of token.

// import { Octokit } from "@octokit/core";

// const octokit = new Octokit({
//   auth: "mypersonalaccesstoken123",
// });

// const { data } = await octokit.request("/user");
// To use a different authentication strategy, set options.authStrategy. A list of authentication strategies is available at octokit/authentication-strategies.js.

// Example

// import { Octokit } from "@octokit/core";
// import { createAppAuth } from "@octokit/auth-app";

// const appOctokit = new Octokit({
//   authStrategy: createAppAuth,
//   auth: {
//     appId: 123,
//     privateKey: process.env.PRIVATE_KEY,
//   },
// });

// const { data } = await appOctokit.request("/app");
// The .auth() method returned by the current authentication strategy can be accessed at octokit.auth(). Example

// const { token } = await appOctokit.auth({
//   type: "installation",
//   installationId: 123,
// });
// Logging
// There are four built-in log methods

// octokit.log.debug(message[, additionalInfo])
// octokit.log.info(message[, additionalInfo])
// octokit.log.warn(message[, additionalInfo])
// octokit.log.error(message[, additionalInfo])
// They can be configured using the log client option. By default, octokit.log.debug() and octokit.log.info() are no-ops, while the other two call console.warn() and console.error() respectively.

// This is useful if you build reusable plugins.

// If you would like to make the log level configurable using an environment variable or external option, we recommend the console-log-level package. Example

// const octokit = new Octokit({
//   log: require("console-log-level")({ level: "info" }),
// });
// Hooks
// You can customize Octokit's request lifecycle with hooks.

// octokit.hook.before("request", async (options) => {
//   validate(options);
// });
// octokit.hook.after("request", async (response, options) => {
//   console.log(`${options.method} ${options.url}: ${response.status}`);
// });
// octokit.hook.error("request", async (error, options) => {
//   if (error.status === 304) {
//     return findInCache(error.response.headers.etag);
//   }

//   throw error;
// });
// octokit.hook.wrap("request", async (request, options) => {
//   // add logic before, after, catch errors or replace the request altogether
//   return request(options);
// });
// See before-after-hook for more documentation on hooks.

// Plugins
// Octokit’s functionality can be extended using plugins. The Octokit.plugin() method accepts a plugin (or many) and returns a new constructor.

// A plugin is a function which gets two arguments:

// the current instance
// the options passed to the constructor.
// In order to extend octokit's API, the plugin must return an object with the new methods.

// // index.js
// const { Octokit } = require("@octokit/core")
// const MyOctokit = Octokit.plugin(
//   require("./lib/my-plugin"),
//   require("octokit-plugin-example")
// );

// const octokit = new MyOctokit({ greeting: "Moin moin" });
// octokit.helloWorld(); // logs "Moin moin, world!"
// octokit.request("GET /"); // logs "GET / - 200 in 123ms"

// // lib/my-plugin.js
// module.exports = (octokit, options = { greeting: "Hello" }) => {
//   // hook into the request lifecycle
//   octokit.hook.wrap("request", async (request, options) => {
//     const time = Date.now();
//     const response = await request(options);
//     console.log(
//       `${options.method} ${options.url} – ${response.status} in ${Date.now() -
//         time}ms`
//     );
//     return response;
//   });

//   // add a custom method
//   return {
//     helloWorld: () => console.log(`${options.greeting}, world!`);
//   }
// };
// Build your own Octokit with Plugins and Defaults
// You can build your own Octokit class with preset default options and plugins. In fact, this is mostly how the @octokit/<context> modules work, such as @octokit/action:

// const { Octokit } = require("@octokit/core");
// const MyActionOctokit = Octokit.plugin(
//   require("@octokit/plugin-paginate-rest").paginateRest,
//   require("@octokit/plugin-throttling").throttling,
//   require("@octokit/plugin-retry").retry
// ).defaults({
//   throttle: {
//     onAbuseLimit: (retryAfter, options) => {
//       /* ... */
//     },
//     onRateLimit: (retryAfter, options) => {
//       /* ... */
//     },
//   },
//   authStrategy: require("@octokit/auth-action").createActionAuth,
//   userAgent: `my-octokit-action/v1.2.3`,
// });

// const octokit = new MyActionOctokit();
// const installations = await octokit.paginate("GET /app/installations");
// LICENSE
// MIT

