// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  let badgeLicence;

  switch (data.licence) {
    case "MIT":
      badgeLicence = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "Apache-2.0":
      badgeLicence = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "GNU General Public License (GPL)":
      badgeLicence = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case "Berkeley Software Distribution License (BSD)":
      badgeLicence = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case "Internet Systems Consortium License (ISC)":
      badgeLicence = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
      break;
  }

  return `
  # ${data.title}
  
  ## ${data.description}
  
  ## Table of Contents
  
- [Installation](#installation)
- [Usage](#usage)
- [License](#licence)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

### Installation

${data.installation}

### Usage

${data.usage}

### Licence

${badgeLicence}

### Contributing

${data.credits}

### Tests

${data.websiteUrl}

### Questions

If you have any questions please contact me on email: [Email](${data.email}) or github[Github](${data.githubProfile})

`;
}

module.exports = generateMarkdown;
