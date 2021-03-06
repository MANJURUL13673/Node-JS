const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send('Hello World');
});

app.get('/about-us',(req, res) => {
    //res.status(200).json({user: 'shyam', balance: '2000', id: '123ght56'});
    res.status(500).json({error: 'something went wrong'});
});

app.get('/ab*cd',(req, res) => {
    res.send('<h1>I am regex page<h1>');
});

app.get('/user/:id/status/:status_id',(req, res) => {
    res.send(req.params);
});

app.get('/flights/:from-:to', (req, res) => {
    res.send(req.params);
})

app.post('/login',(req, res) => {
    res.send('login success');
});

//assignment 1
//create route for contact us and services 
// app.get('/contact',(req, res) => {
//     res.send('I am in contact');
// })

// app.get('/services',(req, res) => {
//     res.send('<ul><li>Video Editing</li><li>Vloging</li><li>Laundry</li></ul>');
// })

//assignment 2
//create a delete route and test it using postman
app.post('/delete',(req, res) => {
    res.send('delete success');
});

app.listen(3000, () => {
    console.log('Server is running at port 3000....');
});