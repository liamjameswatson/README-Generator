// function to generate markdown for README
function generateMarkdown(data) {
  return`
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

${data.licence}

### Contributing

${data.credits}

### Tests

${data.websiteUrl}

### Questions

If you have any questions please contact me on email: [Email](${data.email}) or github[Github](${data.githubProfile})

`;
}

module.exports = generateMarkdown;
