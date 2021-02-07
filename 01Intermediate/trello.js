// const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];

// console.log(days[0]);

// days.forEach(function (day, index) {
//     console.log(`starts with ${index+1} -- ${day}`);
// });

// //Assignment

// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// months.forEach(function (month, index) {
//     console.log(`starts with ${index+1} -- ${month}`);
// });

// for (let i = 0; i < days.length; i++) {
//     console.log(`starts with ${i+1} -- ${days[i]}`);
// }

// //reverse print
// for(let i = days.length; i >= 0; i--) {
//     console.log(`starts with ${i+1} -- ${days[i]}`);
// }

const myTodos = []

myTodos.push('Buy Bread');
myTodos.push('Record Videos for youtube');
myTodos.push('Got to Gym');

myTodos.forEach(function (todo, index) {
    console.log(`Your task no. ${index + 1} is: ${todo}`);
});

//Assignment
myTodos.unshift('Morning prayer');

for(let i = 0; i < myTodos.length; i++) {
    console.log(`Your task no. ${i + 1} is: ${myTodos[i]}`);
}