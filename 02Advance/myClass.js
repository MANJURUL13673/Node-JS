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

const john = new User('John', 'Anderson', 34);
console.log(john.getFullName());
john.editName('Johnny Anderson');
console.log(john.getFullName());
john.setMiddleName('Doe');
console.log(john.getFullName());
// const sammy = new User();
// console.log(sammy);