var http = require('http');
var Handlebars = require('handlebars');
var server = http.createServer(function (request, response) {
    if (request.url == "/") {
        var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I am professor of " +
            "{{uc.length}} UC:</p>" + "<ul>{{#uc}}<li>{{name}} of {{year}} year</li>{{/uc}}</ul>" + "at {{um}} ";
        var template = Handlebars.compile(source);
        var data = {
            "name": "Filipe",
            "hometown": "Trofa, PRT",
            "uc": [{ "name": "Web Programming", "year": "2nd" },
            { "name": "ISI", "year": "3rd" }],
            "um": "University of Minho"
        };
        var result = template(data);
        response.end(result);
    }
});
server.listen(process.env.PORT || 3000, function () {
    console.log('Servidor Node.js em execucao');
});