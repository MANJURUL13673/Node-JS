// const sayHello = function(name){
//     return "Hey there, " + name + " !";
// }

// console.log(sayHello("Sammy"));

// const sayHello = (name) => `hey there ${name} !`


// console.log(sayHello("Sammy"));


// const todos = [{
//     title: 'Buy bread',
//     isDone: true
// }, {
//     title: 'Go to gym',
//     isDone: true
// }, {
//     title: 'Record youtube video',
//     isDone: false
// }]

// const thingsDone = todos.filter((todo) => todo.isDone === true )
// console.log(thingsDone);

//Assignment
const todos = [{
    title: 'praying salah',
    isDone: true
}, {
    title: 'office work',
    isDone: false
}, {
    title: 'problem solving',
    isDone: false
}, {
    title: 'youtube video',
    isDone: false
}, {
    title: 'learn node js',
    isDone: true
}]

//const things = todos.keys((todo) => todo.isDone === false);
const todosNotDone = (todos.filter((todo) => todo.isDone === false)).map((todo) => todo.title);

//console.log(todosNotDone);

const cameras = {
    price: 600,
    weight: 2000,
    myDes: () => {
        return `This canon camera is of ${this.price}$`
    }
}

console.log(cameras.myDes());

//This is only for Redux people
const func = () => ({key: 'value'});