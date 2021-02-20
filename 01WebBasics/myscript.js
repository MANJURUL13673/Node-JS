// const myElement = document.querySelectorAll('.classone');

// console.log(myElement[0]);

// const myPElement = document.querySelector('p');
// myPElement.textContent = 'I am being changed using JS';

const myPElement = document.querySelectorAll('p');

// myPElement.forEach(function(p){
//     p.textContent = 'I am changed by JS loop'
// })

//Assignment using Arrow Function
myPElement.forEach((p) => {
    p.textContent = 'I am changed using Arrow function of JS'
});