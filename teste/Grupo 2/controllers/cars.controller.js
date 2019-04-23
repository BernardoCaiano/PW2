const connectL = require("../connect.js")
let txt, numRows;

//Guardar os dados numa tabela da Base de Dados (SQL) 
function send(get, resp) {
    if (get.body.brand != "" & get.body.model != "" & get.body.licensePlate != "" & get.body.date != "") {
        //Enviar os dados para a base de dados utilizando o formulário criado.
        connectL.con.query(`INSERT INTO FTP1_9170125 VALUES("${get.body.brand}", "${get.body.model}", "${get.body.licensePlate}", "${get.body.date}")`, (err, result) => {
            if (err) {
                throw (err)
            }
        })
    }
}

//ler os dados da base de dados 
function get(req, resp) {
    
    connectL.con.query(`SELECT * FROM FTP1_9170125`, (err, rows, fields) => {
        if (!err) {
            numRows = rows.length;
            result = rows;
            
            //Apresentar os resultados de uma forma apelativa
            txt += `<table class='table' style='width:50%' border='1'>
            <tr><td>Brand</td><td>Model</td><td>License Plate</td><td>Date</td></tr>`
            for (i = 0; i < numRows; i++) {
                txt += "<tr><td>" + result[i].brand + "</td><td>" + result[i].model + "</td><td>" + result[i].licensePlate + "</td><td>" + result[i].date + "</td></tr>";
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
            resp.end()
            txt = ""
        }
       
    })

}

module.exports = {
    send,
    get
}