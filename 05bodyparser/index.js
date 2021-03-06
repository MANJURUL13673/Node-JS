const express = require('express');

let app = express();

app.use(express.urlencoded({extended: false}));

app.use('/login',express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.send('Hello, my application!');
});

app.post('/login', (req, res) => {
    console.log(req.body.email);
    //do some database process
    res.redirect('/');
})

app.listen(3000, () => {
    console.log('Server is running at port 3000');
})