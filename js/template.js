// Generates the corresponding license badge in the README

const generateLicenseBadge = (license) => {

    if (license === 'Apache License 2.0') {
    return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'}

    else if (license === 'GNU General Public License v3.0') {
      return '![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)'
    }

    else if (license === 'MIT License') {
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    }

    else if (license === 'BSD 2-Clause "Simplified" License') {
      return '![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)'
    }
    
    else if (license === 'BSD 3-Clause "New" or "Revised" License') {
      return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)'
    } 
    
    else if (license === 'Boost Software License 1.0') {
      return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)'
    }
    
    else if (license === 'Creative Commons Zero v1.0 Universal') {
      return '![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)'
    } 
    
    else if (license === 'Eclipse Public License 2.0') {
      return '![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)'
    } 

    else if (license === 'GNU Lesser General Public License v3.0') {
        return '![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)'
    }
    
    else if (license === 'Mozilla Public License 2.0') {
      return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)'
    }

    else if (license === 'The Unilicense') {
        return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)'
    }
}

// Generates the selected license document in the README

const generateLicense = (license) => {

    if (license === 'Apache License 2.0') {
        return 'Apache License 2.0: https://opensource.org/licenses/Apache-2.0'}
    
        else if (license === 'GNU General Public License v3.0') {
          return 'GNU General Public License v3.0: https://www.gnu.org/licenses/gpl-3.0'
        }
    
        else if (license === 'MIT License') {
          return 'MIT License: https://opensource.org/licenses/MIT'
        }
    
        else if (license === 'BSD 2-Clause "Simplified" License') {
          return 'BSD 2-Clause "Simplified" License: https://opensource.org/license/bsd-2-clause/'
        }
        
        else if (license === 'BSD 3-Clause "New" or "Revised" License') {
          return 'BSD 3-Clause "New" or "Revised" License: https://opensource.org/license/bsd-3-clause/'
        } 
        
        else if (license === 'Boost Software License 1.0') {
          return 'Boost Software License 1.0: https://opensource.org/license/bsl-1-0/'
        }
        
        else if (license === 'Eclipse Public License 2.0') {
          return 'Eclipse Public License 2.0: https://www.eclipse.org/legal/epl-v10.html'
        } 
    
        else if (license === 'GNU Lesser General Public License v3.0') {
            return 'GNU Lesser General Public License v3.0: https://opensource.org/license/lgpl-3-0/'
        }
        
        else if (license === 'Mozilla Public License 2.0') {
          return 'Mozilla Public License 2.0: https://opensource.org/license/mpl-2-0/'
        }
    
        else if (license === 'The Unilicense') {
            return 'The Unilicense: https://choosealicense.com/licenses/unlicense/'
        }
}


function generateMarkdown(answer) {

 return `# ${answer.project_title} ${generateLicenseBadge(answer.License)}

# Table of Contents

-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[License](#license)
-[Contributions](#contributions)
-[Tests](#tests)
-[Questions](#questions)


## Description:

    ${answer.Description}

## Installation:

    ${answer.Installation}

## Usage:

    ${answer.Usage}

## License:

    ${generateLicense(answer.License)}

## Contributions:

    ${answer.Contributing}

## Tests:

    ${answer.Tests}

## Questions

   Link to Github: https://github.com/${answer.Git_user_name}

   Email: ${answer.email}
`;
}

module.exports =

 {generateMarkdown,
  generateLicense,
  generateLicenseBadge
};