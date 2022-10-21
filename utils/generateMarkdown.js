// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  license = license.toUpperCase();
  if (license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license == "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license == "BSD") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return "- [License](#license)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  license = license.toUpperCase();
  if (license) {
    return `## License
This project is licensed under the [${license}](./LICENSE) license.`;
  } else {
    return "";
  }
}

//  Create a function that returns the description section of README
// If there is no description, return an empty string
function renderDescriptionSection(description) {
  if (description) {
    return `## Description
${description}`;
  } else {
    return "";
  }
}

//Create a function that returns the installation link
// If there is no installation, return an empty string
function renderInstallationLink(installation) {
  if (installation) {
    return "- [Installation](#installation)";
  } else {
    return "";
  }
}

// Create a function that returns the usage link
// If there is no usage, return an empty string
function renderUsageLink(usage) {
  if (usage) {
    return "- [Usage](#usage)";
  } else {
    return "";
  }
}

// Create a function that returns the contributing link
// If there is no contributing, return an empty string
function renderContributingLink(contributing) {
  if (contributing) {
    return "- [Contributing](#contributing)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the tests link
// If there is no tests, return an empty string
function renderTestsLink(tests) {
  if (tests) {
    return "- [Tests](#tests)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the questions link
// If there is no questions, return an empty string
function renderQuestionsLink(questions) {
  if (questions) {
    return "- [Questions](#questions)";
  } else {
    return "";
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 ${renderLicenseBadge(data.license)}
 ${renderDescriptionSection(data.description)}
  ## Table of Contents
  ${renderInstallationLink(data.installation)}
  ${renderUsageLink(data.usage)}
  ${renderLicenseLink(data.license)}
  ${renderContributingLink(data.contributing)}
  ${renderTestsLink(data.tests)}
  ${renderQuestionsLink(data.questions)}
   ${renderLicenseSection(data.license)}`;
}

module.exports = generateMarkdown;

// # ${data.email}
//# ${data.userName}
