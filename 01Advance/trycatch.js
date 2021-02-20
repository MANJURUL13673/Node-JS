const convertToTs = (dollar) => {
    if (typeof dollar === 'number') {
        return dollar * 80
    } else {
        throw Error('Amount need to be in number')
    }
}

try {
    const myValue = convertToTs('five');
    console.log(myValue);
} catch (e) {
    console.log(e);
}

console.log('I will not run if program crashed');