let iAmGlobal = 'someValue';

if (true) {
    var iAmLocal = 'someMoreValue';
    iAmGlobal = 'superman';
    console.log(iAmGlobal);
    console.log(iAmLocal);
}

console.log(iAmLocal);
console.log(iAmGlobal);

//Kings problem

//let king = 'John';

if (true) {
    //let king = 'Sam';

    if (true) {
        king = 'Nam';
        console.log(king);
    }
}

if (true) {
    console.log('I am second part ' + king);
}