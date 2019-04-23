// Carrega a biblioteca HTTP do Node.js
const http = require('http');
const url = require("url");

const server = http.createServer(function (request, response) {

    response.writeHead(200, { "Content-Type": "text/html" });
    // request.url -> retorna uma string sobre o que foi digitado no endereço URL
    if (request.url == "/exam") {
        response.write("<html><body><h1>Estou no teste prático de PW2 e isto é...</h1></body></html>");
    } else if (request.url == "/room") {
        response.write("<html><body><h1>Estou na sala</h1></body></html>");
    } else {
        response.write("<html><body><h1>Estou perdido...</h1></body></html>");
    }
    response.end(); // envia uma resposta para o cliente
});

server.listen(3000, function () { console.log('Servidor Node.js em execucao'); });