//datatype - Array

// const superHeroes = ['Iron Man', 'Spiderman', 'Capt. America', 'Thor'];

// console.log(superHeroes);
// console.log(superHeroes[0]);
// console.log(superHeroes[2]);
// console.log(superHeroes.length);
// console.log(superHeroes[superHeroes.length - 1]);

// console.log(`We have ${superHeroes.length} super heroes`);

const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

numbers[1] = 'SOMETHING'; //replace value at a position

console.log(numbers);

//start 

// numbers.shift();    //deleted first element
// console.log(numbers);
// console.log(numbers.shift());    //print the deleted element

// numbers.unshift('SOMETHING');  //Insert first element
// console.log(numbers);

//end

// numbers.pop();  //delete the last element
// console.log(numbers);
// console.log(numbers.pop())  //show the delete item;

numbers.push('Seven');
console.log(numbers);

//middle

numbers.splice(2, 2, 'SOMETHING');  //take numbers of item and insert value in that place
console.log(numbers);