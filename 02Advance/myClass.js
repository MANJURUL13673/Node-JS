class User{
    constructor(firstname, lastname, credit) {
        this.firstname = firstname;
        this.middlename = "";
        this.lastname = lastname;
        this.credit = credit;
    }

    getFullName(){
        // let fullname = this.firstname + ' ' + this.lastname;
        // return fullname;
        //Assignment
        return this.firstname + ' ' + this.middlename + ' ' + this.lastname;
    }

    setMiddleName(middlename){
        this.middlename = middlename;
    }
    
    editName(newname) {
        const myname = newname.split(' ');
        this.firstname = myname[0];
        this.lastname = myname[1];
    }
}

class Teacher extends User {
    constructor(firstname, lastname, credit, subject) {
        super(firstname, lastname, credit, subject);
        this.subject = subject;
    }
    getFullName() {
        return this.firstname + ' ' + this.middlename + ' ' + this.lastname + ' and subject is ' + this.subject;
    }
}

//create object
const john = new Teacher('John', 'Anderson', 34, 'Python');
console.log(john.getFullName());
//edit the name
john.editName('Johnny Anderson');
console.log(john.getFullName());
//take middle name
john.setMiddleName('Doe');
console.log(john.getFullName());
// const sammy = new User();
// console.log(sammy);