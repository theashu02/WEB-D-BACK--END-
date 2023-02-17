const express = require('express');
const { Server } = require('http');
const app = express();
const port = 3000;

// also install express using -- npm i express
//use nodemon filename or node filename
// First method to start Server

app.get('/Home', (req, res) => res.send('<h1>My name is Ashu Chauhan</h1>'));
app.get('/Contact', (req, res) => res.send('ashutoshchauhan1919@gmail.com'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Second method to start server

app.get('/', function(req, res){
    res.send('<h1>My name is Ashu Chauhan</h1>');
});

app.listen(3000, function(){
    console.log(`Example app listening on port ${port}!`);
});