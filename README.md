# Professional-README-Generator

## Description

Professional-README-Generator is an application that allows a user to dynamically generate a professional README.md file from a user's input by using a command-line. This allows the project creator to devote more time working on the project.

Here is a walkthrough [video](https://drive.google.com/file/d/1CLhOCxvaRR_gl_s3w5GOWlgxVUa5fYrW/view) demonstrating the functionality of the application.

### Features

- Easy to modify
- Provides choices and default options.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Credits](#credits)
- [License](#license)

## Installation

- Create a new repository on your GitHub account.
- Clone this repository.
- Run npm i

## Usage

This project can be used in any command-line.

Following is a code snippet of the application page.

Here it refers to a prompt asking the user for their choice of license and also provides a default value for installation command that allows the user to press ENTER without submitting any answer.

```Node.js

inquirer
  .prompt ([
    {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies? ",
    default: "npm i",
  },
])

```

## Technologies Used

- Node.js
- Inquirer package
- Git
- GitHub

## Credits

- npmjs.com
- MDN / W3Schools

## License

This project is licensed under the [MIT](./LICENSE) license.
