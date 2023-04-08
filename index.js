const inquirer = require('inquirer');
const fs = require('fs');
let everySingleEmployee = ""
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const nameManager = "Manager"
const nameIntern = "Intern"
const nameEngineer = "Engineer"
const initialData = `<!DOCTYPE html>
<html lang="en">

  <head>
    <title>My Team</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" type="text/css" href="./style.css" />
  </head>

  <body>
    <header class="main-header">
      <h1>My Team</h1>

    </header>

    <main>`


const endData = `
</main>
</body>

</html>`


// asks what the job title of the employee theyre adding is, then prompts questions related to that employee
function loadEmployeePrompts() {
      return  inquirer
          .prompt([
    {
      type: "list",
      name: "choice",
      message: "What is the Employees Title",
      choices: [
        {
          name: "Intern",
          value: "intern"
        },
        {
          name: "Engineer",
          value: "engineer"
        },
        {
          name: "Manager",
          value: "manager"
        },
      ]
    }])
  .then(res => {
    let choice = res.choice;
    switch (choice) {
      case "intern":
        internQ();
        break;
      case "engineer":
        engineerQ();
        break;
      case "manager":
        managerQ();
    }
  }
  )  }         
     
  
//prompts intern questions 
function internQ (){

return inquirer
    .prompt([
        {
            type: 'input',
            message:"What is the Interns School",
            name:'school',
        },
        {
          type: 'input',
          message:"What is the Employees name",
          name:'name',
      },
      {
          type: 'input',
          message:"What is the Employees ID",
          name:'id',
      },
      {
          type: 'input',
          message:"What is the Employees Email",
          name:'email',
      },
      {
          type: 'input',
          message:"What is the Employees Github Username",
          name:'github',
      }
    ])    .then((answers)=>{
      const intern = new Intern( 
        nameIntern,
        answers.name, 
        answers.id, 
        answers.email, 
        answers.school, 
        answers.github
      )
      console.log(answers);
      makeAnswersHTML(intern);
  })}

  

//prompts engineer questions
function engineerQ (){
 return inquirer
      .prompt([
          {
              type: 'input',
              message:"What is the Engineers School",
              name:'school',
          },
          {
            type: 'input',
            message:"What is the Employees name",
            name:'name',
        },
        {
            type: 'input',
            message:"What is the Employees ID",
            name:'id',
        },
        {
            type: 'input',
            message:"What is the Employees Email",
            name:'email',
        },
        {
            type: 'input',
            message:"What is the Employees Github Username",
            name:'github',
        }
      ])    .then((answers)=>{
        const engineer = new Engineer( 
          nameEngineer,
          answers.name, 
          answers.id, 
          answers.email, 
          answers.school, 
          answers.github
        )
        console.log(answers);
        makeAnswersHTML(engineer);
    })}

    

//prompts manager questions
function managerQ (){

  return inquirer
      .prompt([
          {
              type: 'input',
              message:"What is the Managers Office number",
              name:'office',
          },
          {
            type: 'input',
            message:"What is the Employees name",
            name:'name',
        },
        {
            type: 'input',
            message:"What is the Employees ID",
            name:'id',
        },
        {
            type: 'input',
            message:"What is the Employees Email",
            name:'email',
        },
        {
            type: 'input',
            message:"What is the Employees Github Username",
            name:'github',
        }
      ])    .then((answers)=>{
        const manager = new Manager( 
        nameManager,
        answers.name, 
        answers.id, 
        answers.email, 
        answers.office, 
        answers.github
      )
        console.log(answers);
        console.log(manager);
        makeAnswersHTML(manager)
        // makeAnswersHTML(answers, nameManager);
    })}

function continueCreating (allEmployees){
    return  inquirer
        .prompt([
  {
    type: "list",
    name: "moreEmployees",
    message: "Would you like to input more employees?",
    choices: [
      {
        name: "Yes",
        value: "yes"
      },
      {
        name: "No",
        value: "no"
      },
    ]
  }])
.then(res => {
  let choice = res.moreEmployees;
  switch (choice) {
    case "yes":
      loadEmployeePrompts();
      break;
    case "no":
      insertEmployees(allEmployees);
  }
}
)  }
    

//turns answers into HTML
const makeAnswersHTML= (userAnswers, jobtitle)=>{
  if(userAnswers.jobTitle === "Manager"){
    console.log("Manager" + userAnswers)
  let jobData =`
            <section class="card camera">
            <h1>${userAnswers.jobTitle}</h1>
            <h1>${userAnswers.name}</h1>
            <h2>${userAnswers.officeNumber}</h2>
            <p>ID: ${userAnswers.id}</p>
            <p>Email: ${userAnswers.email}</p>
            <a href="https://github.com/${userAnswers.github}" target="_blank" >GitHub: https://github.com/${userAnswers.github}</a>
            </section>`
          return createEmployee(jobData)
  } else {
    console.log("not manager" + userAnswers)
    let jobData =`
    <section class="card camera">
    <h1>${userAnswers.jobTitle}</h1>
    <h1>${userAnswers.name}</h1>
    <h2>${userAnswers.school}</h2>
    <p>ID: ${userAnswers.id}</p>
    <p>Email: ${userAnswers.email}</p>
    <a href="https://github.com/${userAnswers.github}" target="_blank" >GitHub: https://github.com/${userAnswers.github}</a>
    </section>`
  return createEmployee(jobData)
  }
        }



const createEmployee= (jobData)=>{
  everySingleEmployee = jobData + everySingleEmployee
  console.log(everySingleEmployee)
  continueCreating(everySingleEmployee)



    
}




//puts the Answers into an HTML File
const insertEmployees = (jobData)=>{
let HTMLdata = initialData + jobData + endData
      fs.appendFile(
          'index.html',
           HTMLdata,
           (error)=> error ? console.error(error) : console.log('Data-Saved')
           )}


 loadEmployeePrompts()

module.exports = loadEmployeePrompts