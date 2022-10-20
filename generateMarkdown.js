// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents:
  1. [Username](#Username)
  2. [Repository](#Repository)
  3. [Description](#Description)
  4. [Contents](#Contents)
  5. [Installation](#Installation)
  6. [Usage](#Usage)
  7. [License](#License)
  8. [Contributions](#Contributions)
  9. [Testing](#Testing)

  ## Username
  ${data.Username}
  ## Repository
  ${data.Repository}
  ## Description
  ${data.Description}
  ## Contents
  ${data.Contents}
  ## Installation
  ${data.Installation}
  ## Usage
  ${data.Usage}
  ## License
  ${data.License}
  ## Contributions
  ${data.Contributions}
  ## Testing
  ${data.Testing}

`;
}

module.exports = generateMarkdown;
