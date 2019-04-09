var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var app = express();
const mysql = require('mysql');
const connectL = require('./connectMySql.js');
let txt, numRows;
let pedidoBaseFeito = 0;





//body parser
app.use(bodyParser.urlencoded({ extended: true }));


//chamar formulario
app.use('/form', express.static(__dirname + '/form.html'));

//depois do sbmite escrever..
app.post('/myaction', function (req, res, exibirTabela) {
    let nameData = req.body.name;
    let lastNameData = req.body.lastName;
    let insertRealizado = false;
    //let msgData = req.body.message;
    res.send(' Name-' + req.body.name + '\nLast name:' + req.body.lastName);
    //connectL.con.query('SELECT * from a_verdadeira_tabela',
    let sql = "INSERT INTO a_verdadeira_tabela (nome, apelido) VALUES ('" + nameData + "', '" + lastNameData + "')";
    connectL.con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        insertRealizado = true;

    });


});

app.get('/showData', function (req, resp) {

    connectL.con.query('SELECT * from a_verdadeira_tabela', function (err, rows, fields) {
        if (!err) {
            numRows = rows.length;
            result = rows;
            pedidoBaseFeito = 1;

            txt += "<table class='table' style='width:50%' border='1'>";
            txt += "<tr><td>Nome</td><td>Pass</td></tr>";
            for (x = 0; x < numRows; x++) {
                txt += "<tr><td >" + result[x].nome + "</td><td>" + result[x].pass + "</td></tr>";
            }
            txt += "</table>";

            //mostar tabela
            resp.writeHead(200, { "Content-Type": "text/html" });
            resp.write(
                `<html><title>Nomes</title> <meta charset="utf-8"> <meta name="viewport"
                    content="width=device-width, initial-scale=1"> <link rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> <script
                    src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script><script
                    src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> <body>`
            );
            resp.write(txt);
            resp.write("</body></html>");
            resp.end();
        }
        else {
            console.log('Error while performing Query.', err);
        }
    })
})

app.listen(3000);
console.log("Loading...")


// fazer um if antes do query de fazer select paraverificar se o pedido foi feito
