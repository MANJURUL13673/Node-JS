function myValidation(){
    let myValue = document.getElementById('myform').value;
    const myElement = document.getElementById('idtwo');

    if (isNaN(myValue) || myValue < 1 || myValue > 20) {
        myElement.textContent = 'This is not a valid input!';
    } else {
        myElement.textContent = 'This is valid input!';
    }
}