// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.license);
  let badgeLicense;
  switch (data.license) {
    case "MIT":
      badgeLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "Apache-2.0":
      badgeLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "GNU General Public License (GPL)":
      badgeLicense = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case "Berkeley Software Distribution License (BSD)":
      badgeLicense = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case "Internet Systems Consortium License (ISC)":
      badgeLicense = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
      break;
    default:
      badgeLicense = `badge not found`;
  }

  return `
  # ${data.title}


  
  ## Description
  ${data.description}
  
  ## Table of Contents
  
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

### Installation

${data.installation}

### Usage

${data.usage}

### License

${data.license}  <br>
${badgeLicense}

### Contributing

${data.contributing}

### Tests

${data.tests}

### Website

The website can be found here ${data.websiteUrl}

### Questions

If you have any questions please contact me on email: ${data.email} or github: ${data.githubProfile}

`;
}

module.exports = generateMarkdown;

// function displayImg(icon) {
//   var iconImg;
//   console.log("old icon", iconImg);
//   switch (icon) {
//     case "04d":
//     case "04n":
//       iconImg = "cloudy-sky";
//       break;
