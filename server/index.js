var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");
var storyRouter = require('./routers/story.js');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/hackednews');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// UNCOMMENT FOR REACT
// app.use(express.static(__dirname + '/../react-client/dist'));

app.use(express.static(path.join(__dirname + 'react-client')));

app.get('/', (req, res) => {
    console.log("server work")
    res.sendFile('index.html');
    // res.sendFile('index.html', { root: __dirname });
});

app.post('/Topten', (req, res) => {
        var getreq = req.body.topten
        res.send("done");
    })
    // UNCOMMENT FOR ANGULAR
    // app.use(express.static(__dirname + '/../angular-client'));
    // app.use(express.static(__dirname + '/../node_modules'));


app.listen(8000);