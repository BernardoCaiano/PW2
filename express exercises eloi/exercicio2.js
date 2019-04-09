var express = require('express');
var app = express();
//app.use(express.static(__dirname +'/html1'));
app.get('/html1', function(req, res) {
    res.sendfile('./html1.html');
    //app.use(express.static(__dirname +'/html1'));
    });
app.get('/static/jpg', function(req, res) {
    res.sendfile('./staticFiles/303626.jpg');
        //app.use(express.static(__dirname +'/html1'));
        });
app.get('/static/pdf', function(req, res) {
    res.sendfile('./staticFiles/pdfboy.pdf');
    //app.use(express.static(__dirname +'/html1'));
    });
    
app.listen(3000);