if (false) {
    console.log('I am inside if Block');
    console.log('I am still inside the if Block');
} else if (true) {
    console.log('I am inside IF IN CAPS BLOCK');
} else {
    console.log('NOTICE THIS PART');  
}


//LCO

var whoIsHere = '';

if (whoIsHere === 'user') {
    console.log('Gretting message for user');
    console.log('Allow access to view all courses');
} else if (whoIsHere == 'teacher') {
    console.log('Gretting message for teacher');
    console.log('Allow access to view his courses');
} else {
    console.log('MESSAGE: please verify your email');
    console.log('Send user an email for verification');
}

//Assignment solution

var studentMarks = 10;

if (studentMarks == 10) {
    console.log('Amazing');
} else if(studentMarks == 5) {
    console.log('Good');
} else if (studentMarks == 3) {
    console.log('Poor');
} else {
    console.log('Fail');
}