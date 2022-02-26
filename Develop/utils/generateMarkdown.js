// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// If there is no license, return an empty string
function renderLicenseLink(license) {}

// If there is no license, return an empty string
function renderLicenseSection(license) {}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## [Description]

  ${data.description}

  ## [Languages]

  ${data.languages}


## [Packages]

${data.packages}

## [Usage]

${data.usage}

## [Contributing](#table-of-contents)

${data.contribution}

##[Tests]

${data.test}

## Credit
${data.credit}

## License

${data.license}

## [Questions]

Please contact me using the following links:

[GitHub](https://github.com/${data.github})

[Email: ${data.email}
`;
}

module.exports = { generateMarkdown };