var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
var server = app.listen(3000, function () {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/assets/Base de Dados.png'))
    });
    console.log("Servidor a funcionar na porta %s...", server.address().port);
});