var express = require("express");
var app = express();
var mustacheExpress = require('mustache-express');
// Register '.html' extension with The Mustache Express
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.get('/', function (req, res) {
    app.set('views', __dirname + '/views');
    res.render('home.html', {
        name: 'Bernardo',
        surname: 'Ferreira'
    });
});
app.listen(process.env.PORT || 3000);