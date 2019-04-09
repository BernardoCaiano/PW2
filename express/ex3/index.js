var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/myaction', function (req, res) {
    res.send('You sent the name "' + req.body.name + '".');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('You sent the name ' + req.body.name + '.');
});
app.listen(3000, function () {
    console.log('Server running at http://127.0.0.3000/');
});                                                                                 