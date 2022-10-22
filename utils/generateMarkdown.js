// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  license = license.toUpperCase();
  if (license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license == "APACHE 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license == "GPL 3.0") {
    return "[![License]([![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license == "BSD 3") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    return "";
  }
}

//Description section
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

// Installation link
//Create a function that returns the installation link
// If there is no installation, return an empty string
function renderInstallationLink(installation) {
  if (installation) {
    return "- [Installation](#installation)";
  } else {
    return "";
  }
}

// Usage link
// Create a function that returns the usage link
// If there is no usage, return an empty string
function renderUsageLink(usage) {
  if (usage) {
    return "- [Usage](#usage)";
  } else {
    return "";
  }
}

// License link
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return "- [License](#license)";
  } else {
    return "";
  }
}

// Contributing link
// Create a function that returns the contributing link
// If there is no contributing, return an empty string
function renderContributingLink(contributing) {
  if (contributing) {
    return "- [Contributing](#contributing)";
  } else {
    return "";
  }
}
// Tests link
// Create a function that returns the tests link
// If there is no tests, return an empty string
function renderTestsLink(tests) {
  if (tests) {
    return "- [Tests](#tests)";
  } else {
    return "";
  }
}

//Questions link
// Create a function that returns the questions link
// If there is no questions, return an empty string
function renderQuestionsLink() {
  return "- [Questions](#questions)";
}

//Installation section
// Create a function that returns the installation section of README
// If there is no installation, return an empty string
function renderInstallationSection(installation) {
  if (installation) {
    return `## Installation
To install necessary dependencies, run the following command:

   ${installation}`;
  } else {
    return "";
  }
}

//Usage section
// Create a function that returns the usage section of README
// If there is no usage, return an empty string
function renderUsageSection(usage) {
  if (usage) {
    return `## Usage
${usage}`;
  } else {
    return "";
  }
}

// License section
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  license = license.toUpperCase();
  if (license) {
    return `## License
This project is licensed under the ${license} license.`;
  } else {
    return "";
  }
}

//Contributing section
// Create a function that returns the contributing section of README
// If there is no contributing, return an empty string
function renderContributingSection(contributing) {
  if (contributing) {
    return `## Contributing
${contributing}`;
  } else {
    return "";
  }
}

// Tests section
// Create a function that returns the tests section of README
// If there are no tests, return an empty string
function renderTestsSection(tests) {
  if (tests) {
    return `## Tests
${tests}`;
  } else {
    return "";
  }
}

// Questions section
// Create a function that returns the questions section of README
// If there are no questions, return an empty string
function renderQuestionsSection(email, userName) {
  if (email && userName) {
    return `## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [${userName}](https://github.com/${userName}).`;
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
  ${renderQuestionsLink()}
  ${renderInstallationSection(data.installation)}
  ${renderUsageSection(data.usage)}
  ${renderLicenseSection(data.license)}
  ${renderContributingSection(data.contributing)}
  ${renderTestsSection(data.tests)}
  ${renderQuestionsSection(data.email, data.userName)}`;
}

module.exports = generateMarkdown;

// # ${data.email}
//# ${data.userName}
//need to commit sections
