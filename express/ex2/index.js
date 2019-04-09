var http = require('http');
var express = require('express');
var app = express();
var port = process.env.PORT;
var server = app.listen(port, function () {
    app.get('/api/users', function (req, res) {
        var name = req.param('name');
        var position = req.param('position');
        var uc = req.param('uc');
        res.send(name + ' is a ' + position + ' in ' + uc);
    });
    console.log("Servidor a funcionar na porta %s...", server.address().port);
}); 