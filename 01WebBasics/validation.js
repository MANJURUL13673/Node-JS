function myValidation(){
    let myValue = document.getElementById('myform').value;
    const myElement = document.getElementById('idtwo');

    if (isNaN(myValue) || myValue < 1 || myValue > 20) {
        myElement.textContent = 'This is not a valid input!';
    } else {
        myElement.textContent = 'This is valid input!';
    }
}

//form validation

document.querySelector('.myform').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.realname.value);
    event.target.username.value = '';
    event.target.realname.value = '';

    //Assignment
    const myNewPara = document.createElement('p');
    myNewPara.textContent = '';
    document.querySelector('.myform').appendChild(myNewPara);
    if (event.target.password.value === event.target.repeatpassword.value) {
        myNewPara.textContent = "Password Matched"
    } else {
        myNewPara.textContent = "Password does not matched"
    }
})