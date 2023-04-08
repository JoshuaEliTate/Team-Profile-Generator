const Employee = require("./Employee");
class Intern extends Employee { //constructor
    constructor(
        jobTitle,
        name,
        id,
        email,
        school,
        github
    ) { //constructor for Intern class
        super(name, id, email); //call super class constructor
        this.github = github
        this.jobTitle = jobTitle
        this.school = school;
    }

    getSchool() { //getter for school
        return this.school; //return school property
    }

    getRole() { //override getRole() method from Employee class
        return "Intern"; 
    }
}

module.exports = Intern; //export Intern class