import inquirer from 'inquirer';
import fs from "fs/promises"

let {projectTitle, description, install, usage, license} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: "What's the title of my project ",
        },
        {
            type: 'input',
            name: 'description',
            message: "Description",
            default() {
                return 'Doe';
            },
        },
        {
            type: 'input',
            name: 'install',
            message: "Install instructions ",
        },
        {
            type: 'input',
            name: 'usage',
            message: "Where to use this project ",
        },
        {
            type: 'select',
            name: 'license',
            message: 'Pick a license',
            choices: ['license1', 'MIT', 'No license', 'License X']
        }
    ])

    
  let readmeDocument =  `
  <a name="title"></a>
  # ${projectTitle}
  <a name="desc"></a>
  ## Description 
  
${description}
  
  ## Table of Contents 
  
  * [Title](#title)
  * [Description](#desc)
  * [Installation](#inst)
  * [Usage](#usage)
  * [License](#lic)
  
  <a name="inst"></a>
  ## Installation
  ${install}
  
  <a name="usage"></a>
  ## Usage 
  ${usage}
  

  
  
  <a name="lic"></a>
  ## License
  
  ${license}

  `
    await fs.writeFile("readme.md", readmeDocument)

    console.log("success!")