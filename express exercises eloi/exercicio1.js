var express = require('express');
var app = express();
app.get('/', function (request, response) {
response.send('Welcome to Express!');
});
app.get('/customer/:id/:lol', function (req, res) {
res.send('Customer requested is ' + req.params['id']+ req.params['lol']);
});
/*
OU
app.get('/customer', function (req, res) {
    var id = req.param('id');
    var lol = req.param('lol');
    
    res.send('Customer requested is ' + id + lol]);
    });
  */  
app.listen(3000);