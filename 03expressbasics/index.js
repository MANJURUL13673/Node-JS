const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send('Hello World');
});

app.get('/about',(req, res) => {
    res.send('<h1>I am about page<h1>');
});

//assignment
//create route for contact us and services 
app.get('/contact',(req, res) => {
    res.send('I am in contact');
})

app.get('/services',(req, res) => {
    res.send('<ul><li>Video Editing</li><li>Vloging</li><li>Laundry</li></ul>');
})

app.listen(3000, () => {
    console.log('Server is running at port 3000....');
});