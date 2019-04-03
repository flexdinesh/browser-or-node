const express = require('express');
const path = require('path');

const app = express();

// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/worker.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/worker.js'));
});

/*
app.get('/worker.js', function(req, res) {
    res.sendFile(path.join(__dirname + '../../src/index.js'));
});
*/
app.get('/index.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.js'));
});

app.get('/browser-or-node.js', function(req, res) {
    res.sendFile(path.join(__dirname + '../../src/index.js'));
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
