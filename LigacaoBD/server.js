const connectL = require("./connect.js")
const http = require("http")

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.write(`
        <html>
            <head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            </head>
            <body>
                <h1>GUSTAVO'S TABLE</h1>
                <div class="jumbotron mt-5 container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>ID ALUNO</th>
                                <th>IDADE</th>
                            </tr>
                        </thead>
                        <tbody>
                `)
    connectL.con.query("SELECT * FROM Gustavo", (err, rows, fields) => {
        if (!err) {
            //console.log(rows)
            rows.forEach(row => {
                if (row.idAluno === 9170193){
                response.write(`
                    <tr>
                        <td>${row.idAluno}</td>
                        <td>${row.idade}</td>
                    </tr>
                `)}
            })
            response.write(`
                                </tbody>
                            </table>
                        </div>
                    </body>
                </html>
            `)
            response.end()
        } else {
            // console.log(err)
        }

    })

})

server.listen(3000)
console.log("Serving")

