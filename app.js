const fs = require('fs');
const express = require('express');
const app = express();
var objIndex = require('./module/objIndex.js');


//Tells express to use the ejs view engine
app.set('view engine', 'ejs');

//Route to index file
//Reads data from an object
app.get('/', function(req, res) {
    res.render('index', objIndex);
});

//Route to about file
//Reads data from a json file
app.get('/about', function(req, res) {
    fs.readFile('./module/about.json', 'utf-8', function(err, data) {
        res.render('about', JSON.parse(data));
    });
});
//Route to contact file
//Reads data from a json file
app.get('/contact', function(req, res) {
    fs.readFile('./module/contact.json', 'utf-8', function(err, data) {
        res.render('contact', JSON.parse(data));
    })
})

//displays a 404 message if the user tries to reach a page with no route
app.get('*', function(req, res) {
    res.send('404 page not found');
})

//starts the server and listens at port 3000
app.listen(3000);
console.log('Server is up and running on port 3000');

