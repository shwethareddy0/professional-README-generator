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
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 ${renderLicenseBadge(data.license)}
 ${renderDescriptionSection(data.description)}
  ## Table of Contents
  ${renderLicenseLink(data.license)}
  # ${data.userName}
  # ${data.email}
  # ${data.cmdForDependencies}
  # ${data.cmdForTests}
  # ${data.repoInfo}
  # ${data.contributing}
  ${renderLicenseSection(data.license)}`;
}

module.exports = generateMarkdown;
