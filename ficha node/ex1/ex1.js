// Carrega a biblioteca HTTP do Node.js
const http = require('http');
const url = require('url')
// Cria uma instância do servidor web
const server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    // request.url -> retorna uma string sobre o que foi digitado no endereço URL

    var queryData = url.parse(request.url, true).query;
    response.writeHead(200, { "Content-Type": "text/plain" });
    if (queryData.name) {
        response.end('Hello ' + queryData.name + "\nPosition " + queryData.position + "\nCourse " + queryData.uc );
    }
});

server.listen(3000, function () { console.log('Servidor Node.js em execucao'); });

//http://localhost:3000/?name=Bernardo&position=Student&uc=PWII