const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];

console.log(days[0]);

days.forEach(function (day, index) {
    console.log(`starts with ${index+1} -- ${day}`);
});

//Assignment

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

months.forEach(function (month, index) {
    console.log(`starts with ${index+1} -- ${month}`);
});

for (let i = 0; i < days.length; i++) {
    console.log(`starts with ${i+1} -- ${days[i]}`);
}

//reverse print
for(let i = days.length; i >= 0; i--) {
    console.log(`starts with ${i+1} -- ${days[i]}`);
}