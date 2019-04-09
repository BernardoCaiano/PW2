var express = require('express');
var app = express();
app.get('/', function (request, response) {
    response.send('Welcome to Express!');
});
app.get('/customer/:id', function (req, res) {
    res.send('Customer requested is ' + req.params['id']);
});
app.listen(3000);