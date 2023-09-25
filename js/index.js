const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./template')
const templateReadme = template.generateMarkdown();
const genLicense = template.generateLicense();
const genBadge = template.generateLicenseBadge();

// const generateReadme = ({project_title, Description, Installation, Usage, License, Contributing, Tests, Questions, Git_user_name, email});
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'project_title',
    },
    {
        type: 'input',
        message: 'Please give a description for the project',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'Usage',
    },
    {
        type: 'list',
        message: 'Which license will you be using?',
        name: 'License',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', ' MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Eclipse Public License 2.0', 'GNU Lesser General Public License v3.0', 'Mozilla Public License 2.0', 'The Unilicense' ]
    },
    {
        type: 'input',
        message: 'List your collaborators, if any.',
        name: 'Contributing',
    },
    {
        type: 'input',
        message: 'What tests will you use?',
        name: 'Tests',
    },

    {
        type: 'input',
        message: 'Any questions?',
        name: 'Questions',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'Git_user_name',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
]

const generate = () => {

inquirer

.prompt (questions)

  .then((answer) => {
    fs.writeFile('README.md', templateReadme, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  })
}

generate();
