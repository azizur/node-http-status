var express = require('express');
var app = express();
var connectTimeout = require('connect-timeout');
var timeout = connectTimeout({
    time: 10
});

var errorJson = {
    error: "API Error",
    error_msg: "You have encountered an error thanks to node-http-staus... Have a nice day!"
};

app.get('/400', function(req, res) {
    console.log('Sending a 400 response');
    res.sendStatus(400);
});

app.get('/401', function(req, res) {
    console.log('Sending a 401 response');
    res.sendStatus(401);
});

app.get('/404', function(req, res) {
    console.log('Sending a 404 response');
    res.sendStatus(404);
});

app.get('/408', timeout, function(req, res) {
    console.log('Sending a 408 response');
    res.sendStatus(408);
});

app.get('/500', function(req, res) {
    console.log('Sending a 500 response');
    res.sendStatus(500);
});

app.get('/503', function(req, res) {
    console.log('Sending a 503 response');
    res.sendStatus(503);
});

app.listen(3000, function() {
    console.log('Node HTTP Status app listening on port 3000!');
});
