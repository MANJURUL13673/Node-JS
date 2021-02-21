// const myElement = document.querySelectorAll('.classone');

// console.log(myElement[0]);

// const myPElement = document.querySelector('p');
// myPElement.textContent = 'I am being changed using JS';

//const myPElement = document.querySelectorAll('p');

// myPElement.forEach(function(p){
//     p.textContent = 'I am changed by JS loop'
// })

//Assignment using Arrow Function

// myPElement.forEach((p) => {
//     p.textContent = 'I am changed using Arrow function of JS'
// });

// const myNewPara = document.createElement('p');
// myNewPara.textContent = 'I was added via JS'

// document.querySelector('body').appendChild(myNewPara)

//Event Listener

// document.querySelector('button').addEventListener('click', (event) => {
//     event.target.textContent = 'I was clicked';
// })

//track input form

document.querySelector('#myform').addEventListener('input', (event) => {
    console.log(typeof event.target.value);
})