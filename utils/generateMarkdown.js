// function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.title}

    #description
    ${data.description}

    // #useage
    ${data.useage}

    #installation
    ${data.installation}

    #credits
    ${data.credits}

    #licence
    ${data.licence}

    #website-url
    ${data.websiteUrl}

    #email
    ${data.email}

 `;
}

module.exports = generateMarkdown;
