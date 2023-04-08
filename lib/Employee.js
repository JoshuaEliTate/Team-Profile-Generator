class Employee {
    constructor(
        name,
        id,
        email
    ) { //constructor for Employee class
       this.name = name; //set name property
       this.id = id; //set id property
       this.email = email; //set email property
    }
    // getters and setters
    getName() { //getter for name
        return this.name; //return name property
    }

    getId() { //getter for id
        return this.id; //return id property
    }

    getEmail() { //getter for email
        return this.email; //return email property
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee; 