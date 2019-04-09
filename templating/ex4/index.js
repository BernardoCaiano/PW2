//handlebars.js
var express = require('express');
var exphbs = require('express-handlebars');
var Handlebars = require('handlebars');
var http = require('http');
var utf8 = require('utf8');
var app = express();
var port = process.env.PORT;
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.get('/pw', function (req, res) {
    res.render('home', {
        title: 'UM', message:
            utf8.encode('Bem-vindos, estamos na Aula de PW'),
        message2: req.param('msg')
    })
});
app.listen(3000);
