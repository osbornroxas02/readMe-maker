// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.Title}

 ## Table of Contents
 * ${data.TOC}

* [Installation](#Installation)
* [Usage](#Usage)
* [Credits](#Credits)
* [License](#License)


## Description 
${data.Description}

## Installation
${data.Installation}

## Usage 
${data.Usage}

## License
${data.License}

## Credits
${data.Credits}

## Contributing
${data.Contributing}

## Contributing
${data.Authors}

## Test
${data.Test}

## Author
Github:[${data.Github}](https://github.com/osbornroxas02)
Email:[${data.Email}](https://github.com/osbornroxas02)

`;
}

module.exports = generateMarkdown;



