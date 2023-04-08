const Employee = require("./Employee");
class Engineer extends Employee { //constructor
    constructor(
        jobTitle,
        name,
        id,
        email,
        school,
        github
    ) { //constructor for Engineer class
        super(name, id, email); //call super class constructor
        this.github = github; 
        this.jobTitle = jobTitle;
        this.school = school;

    }
    //getters and setters
    getGithub() { //getter for github
        return this.github;
    }

    getRole() { //override getRole() method from Employee class
        return "Engineer";
    }
}
//export
module.exports = Engineer;