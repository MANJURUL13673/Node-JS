let userEmail = 'lco123abv';
let password = '1234';

let userChecker = function(myString){
    if ((myString.includes(123)) && (myString.length > 6)) {
        return true;
    }
    else {
        return false;
    }
}

let passChecker = function(myPassword) {
    if ((myPassword.includes(1234)) && (myPassword.length > 8)) {
        return true;
    }
    else {
        return false;
    }
}