const connectL = require("../connect.js")
let txt, numRows;
function get(req, resp) {

    if ((req.param('nomeInput') === '') && (req.param('passInput') != '')) {
        //nome vazio

        connectL.con.query(`SELECT * FROM Users WHERE password = '${req.param('passInput')}'`, (err, rows, fields) => {
            console.log(fields)
            if (!err) {
                resp.send(rows)
            }
            resp.status(400).send({ error: err })

        })
    }

    else if ((req.param('nomeInput') != '') && (req.param('passInput') === '')) {
        //nome vazio
        connectL.con.query(`SELECT * FROM testeCarlos WHERE nome = '${req.param('nomeInput')}'`, (err, rows, fields) => {
            resp.send(rows)
        })
    }

    else if ((req.param('nomeInput') === '') && (req.param('passInput') === '')) {
        //nome vazio
        connectL.con.query(`SELECT * FROM testeCarlos`, (err, rows, fields) => {
            if (!err) {
                numRows = rows.length;
                result = rows;

                txt += `<table class='table' style='width:50%' border='1'>
                <tr><td>Nome</td><td>Pass</td></tr>`
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
                resp.end()
                txt = ""
            }
            //return resp.status(400).send({ error: err })
        })
    }

    else {
        let query = `SELECT * FROM testeCarlos WHERE nome = '${req.param('nomeInput')}' and pass = '${req.param('passInput')}';`
        console.log(query)
        connectL.con.query(query, (err, rows, fields) => {
            resp.send(rows)
        })
    }

}

function registo(get, resp) {
    if (get.body.nomeRegisto != "" & get.body.passRegisto != "") {
        connectL.con.query(`INSERT INTO testeCarlos VALUES("${get.body.nomeRegisto}", "${get.body.passRegisto}")`, (err, result) => {
            if (err) {
                throw (err)
            }
        })
    }
}


module.exports = {
    get,
    registo
}
