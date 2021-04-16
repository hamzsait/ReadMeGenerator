// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  savedLicense = {
    "Apache":"[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "Boost":"[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    "Eclipse":"[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    "IBM":"[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
    "ISC":"[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    "MIT":"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Mozilla":"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "Perl":"[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
  }
  output = ""
  for (const lic of license){
    output = output + savedLicense[lic]
  }
  return output
}

function generateMarkdown(data) {
  return(
  `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description:
  ${data.description}
  
  ## Table of Contents
  
  [1. Installation](#1.-Installation-Requirements:)

  [2. Usage](#2.-Usage:)

  [3. Contribution Guidlines](#3.-Contribution-Guidelines:)

  [4. Lisences](#4.-Lisences:)

  [5. Tests](#5.-Tests:)

  [6. Questions](#6.-Questions:)

  ## 1. Installation Requirements:
  The following command will install the packages needed:

    ${data.installationInstructions}
  
  ## 2. Usage:
  ${data.usageInformation}

  ## 3. Contribution Guidelines:
  ${data.contributionGuidelines}

  ## 4. Lisences:

  ${renderLicenseBadge(data.license)}

  ## 5. Tests:
  The following command can be run to run the testing suite.

    ${data.testIntructions}

  ## 6. Questions
  Have any additonal questions? Feel free to contact me!

  [My GitHub](https://github.com/${data.gitHub})

  [My Email](mailto:${data.email})
  `)
}

module.exports = {
    generateMarkdown
};