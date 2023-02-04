const inquirer = require('inquirer');
const fs = require('fs');
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
        inquirer
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
inquirer
    .prompt([
        {
            type: 'input',
            message:"What is the Interns School",
            name:'employee',
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
      }
    ])    .then((answers)=>{
      console.log(answers);
      makeAnswersHTML(answers);
  })}

  

//prompts engineer questions
function engineerQ (){
  inquirer
      .prompt([
          {
              type: 'input',
              message:"What is the Engineers School",
              name:'employee',
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
        }
      ])    .then((answers)=>{
        console.log(answers);
        makeAnswersHTML(answers);
    })}

    

//prompts manager questions
function managerQ (){
  inquirer
      .prompt([
          {
              type: 'input',
              message:"What is the Managers Office number",
              name:'employee',
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
        }
      ])    .then((answers)=>{
        console.log(answers);
        makeAnswersHTML(answers);
    })}


    

//turns answers into HTML
    const makeAnswersHTML= (userAnswers)=>{
const jobData =`
            <section class="card camera">
            <h1>${userAnswers.name}</h1>
            <h2>${userAnswers.employee}</h2>
            <p>ID: ${userAnswers.id}</p>
            <p>Email: ${userAnswers.email}</p>
            </section>`
          insertEmployee(jobData)

      }




//puts the Answers into an HTML File
const insertEmployee = (jobData)=>{
let HTMLdata = initialData + jobData + endData
      fs.appendFile(
          'index.html',
           HTMLdata,
           (error)=> error ? console.error(error) : console.log('Data-Saved')
           )}


 loadEmployeePrompts()