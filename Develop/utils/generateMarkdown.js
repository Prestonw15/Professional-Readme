//Function to return a message if user decides to have no contributers
function renderContributing(confirmContributers, data) {
  if (!confirmContributers) {
    return `
    Sorry But I will not be accepting contributers for this project.
    `;
  }else {
    return `
    ${data}
    `;
  }
}

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
    
    `;
  } else {
    return ' ';
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
    
    `;
  } else {
    return ' ';
  }
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
    ## [License](#table-of-contents)

    The application is covered under the following license: 
    
    ${renderLicenseLink(license)}
    `;
  } else {
    return ' ';
  }
}

//If there is no license, return an empty string
function renderLicenseTOC(license) {
  if (license !== 'no license') {
    return `
    *[License](#license)
    `;
  } else {
    return ' ';
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTOC(data.license)}
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)

  ## [Description](#table-of-contents)

  ${data.what}

  ${data.why}

  ${data.how}

## [Installation](#table-of-contents)

${data.installation}

## [Usage](#table-of-contents)

${data.usage}

${renderLicenseSection(data.license)}

## [Contributing](#table-of-contents)

${renderContributing(data.confirmContributers, data.contribute)}

##[Tests](#table-of-contents)

${data.test}

## [Questions](#table-of-contents)

Please contact me using the following links:

[GitHub](https://github.com/${data.githubUsername})

[Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;

module.exports = generateMarkdown;
