let getMyGrade = function(currentMarks, totalMarks) {
    
    if(isNaN(currentMarks) || isNaN(totalMarks)) {
        return 'warning! it is not an integer';
    }

    let myPercentage = (currentMarks / totalMarks) * 100;
    
    let myGrade = '';
    if (myPercentage >= 90) {
        myGrade = 'A';
    } else if (myPercentage >= 80) {
        myGrade = 'B';
    } else if (myPercentage >= 70) {
        myGrade = 'C';
    } else if (myPercentage >= 60) {
        myGrade = 'D';
    } else {
        myGrade = 'F';
    }

    return `Your grade is ${myGrade} and percentage is ${myPercentage}`;

}

let yourResult = getMyGrade('abc', 150);
console.log(yourResult);