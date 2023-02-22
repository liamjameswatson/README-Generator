// function to generate markdown for README
function generateMarkdown(data) {
  return `
    #${data.title}

    ##description
    ${data.description}

    ###useage
    ${data.useage}

    ###installation
    ${data.installation}

    ###credits
    ${data.credits}

    ###website-url
    ${data.websiteUrl}
    
    ###email
    ${data.email}
    
    ###licence
    ${data.licence}
 `;
}

module.exports = generateMarkdown;
