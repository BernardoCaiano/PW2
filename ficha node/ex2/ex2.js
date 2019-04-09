const http = require('http');
const url = require('url')
const fs = require('fs');
http.createServer(function (req, res) {
    let queryData = url.parse(req.url, true).query;
    if (req.url != "/favicon.ico") {
        fs.readFile(queryData.site, function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
    
}).listen(3000);
