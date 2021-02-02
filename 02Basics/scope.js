let iAmGlobal = 'someValue';

if (true) {
    var iAmLocal = 'someMoreValue';
    iAmGlobal = 'superman';
    console.log(iAmGlobal);
    console.log(iAmLocal);
}

console.log(iAmLocal);
console.log(iAmGlobal);