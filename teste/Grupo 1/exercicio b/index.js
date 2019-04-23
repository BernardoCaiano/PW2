// Carrega a biblioteca HTTP do Node.js
const http = require('http');
const url = require('url')
const fs = require('fs')
// Cria uma instância do servidor web
const server = http.createServer(function (request, response) {

    // if (request.url == "/schools/esmad/") {
        response.writeHead(200, { "Content-Type": "text/html" });
    
        var queryData = url.parse(request.url, true).query;

        response.writeHead(200, { "Content-Type": "text/plain" });

        response.write('Página de ' + queryData.uc + " da " + queryData.school + " do P.Porto.")
       
        response.end();
          
    // }

    // fs.readFile(queryData.image, function (err, data) {
    //     res.writeHead(200, { 'Content-Type': 'image/gif' });
    //     res.write(data);
    //     res.end();
    // });


    

});

server.listen(3000, function () { console.log('Servidor Node.js em execucao'); });

