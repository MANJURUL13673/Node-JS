localStorage.setItem('hero', 'thor');
localStorage.setItem('todo', 'Buy Ice tea');    //insert
var myHero = localStorage.getItem('hero');

console.log(myHero);

localStorage.setItem('todo', 'Record youtube videos'); //update
console.log(localStorage.getItem('todo'));

localStorage.removeItem('hero');    //delete a single element

console.log(localStorage.getItem('hero'));

localStorage.clear();   //delete all the item