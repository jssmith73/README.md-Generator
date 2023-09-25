const generateLicenseBadge = (license) => {

    if (license === 'Apache License 2.0') {
    return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0'}

    else if (license === 'GNU General Public License v3.0') {
      return '![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    }

    else if (license === 'MIT License') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }

    else if (license === 'BSD 2-Clause "Simplified" License') {
      return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
    }
    
    else if (license === 'BSD 3-Clause "New" or "Revised" License') {
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    } 
    
    else if (license === 'Boost Software License 1.0') {
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    }
    
    else if (license === 'Creative Commons Zero v1.0 Universal') {
      return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
    } 
    
    else if (license === 'Eclipse Public License 2.0') {
      return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
    } 

    else if (license === 'GNU Lesser General Public License v3.0') {
        return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
    }
    
    else if (license === 'Mozilla Public License 2.0') {
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    }

    else if (license === 'The Unilicense') {
        return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
    }
}

const generateLicense = (license) => {

    if (license === 'Apache License 2.0') {
        return 'https://opensource.org/licenses/Apache-2.0'}
    
        else if (license === 'GNU General Public License v3.0') {
          return 'https://www.gnu.org/licenses/gpl-3.0'
        }
    
        else if (license === 'MIT License') {
          return 'https://opensource.org/licenses/MIT'
        }
    
        else if (license === 'BSD 2-Clause "Simplified" License') {
          return 'https://opensource.org/license/bsd-2-clause/'
        }
        
        else if (license === 'BSD 3-Clause "New" or "Revised" License') {
          return 'https://opensource.org/license/bsd-3-clause/'
        } 
        
        else if (license === 'Boost Software License 1.0') {
          return 'https://opensource.org/license/bsl-1-0/'
        }
        
        else if (license === 'Eclipse Public License 2.0') {
          return 'https://www.eclipse.org/legal/epl-v10.html'
        } 
    
        else if (license === 'GNU Lesser General Public License v3.0') {
            return 'https://opensource.org/license/lgpl-3-0/'
        }
        
        else if (license === 'Mozilla Public License 2.0') {
          return 'https://opensource.org/license/mpl-2-0/'
        }
    
        else if (license === 'The Unilicense') {
            return 'https://choosealicense.com/licenses/unlicense/'
        }
}


function generateMarkdown(answer) {
 return `# ${answer.project_title}

# Table of Contents
-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[Licenses](#licenses)
-[Contribution](#contribution)
-[Test](#test)
-[Username](#username)
-[Profile](#profile)


## Description:

    ${answer.Description}
## Installation:

    ${answer.Installation}
## Usage:

    ${answer.Usage}
## License:

    ${answer.License}
## Contributions:

    ${answer.Contributing}
## Tests:

    ${answer.Tests}
## Questions

    ${answer.Questions}
Contact me with any questions!

   Github Username: ${answer.Git_user_name}

   Email: ${answer.email}
`;
}

module.exports =

 {generateMarkdown,
  generateLicense,
  generateLicenseBadge
};