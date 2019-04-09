var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var app = express();
//conectar a data base

var url = "mongodb://localhost:27017/";

//body parser
app.use(bodyParser.urlencoded({ extended: true }));

//form
app.use('/form', express.static(__dirname + '/form.html'));

//action 
app.post('/myaction', function (req, res) {
    ///save form data
    let nameData = req.body.name;
    let emailData = req.body.email;
    let msgData = req.body.message;
    res.send('You sent the name "' + req.body.name + '".');

    //connect to data base
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        console.log("Database connected!");
        //insert form data in a obj
        var dbo = db.db("mydb");
        var myobj = { name: nameData, email: emailData, msg: msgData };
        //insert oject in collection
        dbo.collection("employee").insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");

       

            db.close();
        });
    })
    
});



///get data
app.get('/get-data',function(req,res){
//conect to db
let resultArray=[];
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        console.log("Database connected!");
        //colect data in a obj
        var dbo = db.db("mydb");
        let cursor=dbo.collection("employee").find();
        cursor.forEach(function(doc){ // this takes like 40 ms
            //if(err) throw err;
            console.log('foreach')
            resultArray.push(doc);
            console.log(resultArray[0].name);
           // res.send(doc.name)
        }).then( function(){
            db.close();
            console.log(resultArray);
            //res.send(resultArray)
            res.write("<html><body><h1>Tabela de dados:</h1>");
            res.write(`<table classe="table" style="border=2px"><tr><th>Nome</th><th>Email</th><th>Msg</th></tr>`)
            resultArray.forEach(function(doc){
                res.write(`<tr><td>${doc.name}</td><td>${doc.email}</td><td>${doc.msg}</td></tr>`)
            })
            res.write("</table>");
           
          
         
          
            res.write("</body></html>");

        })

    });

   

})



app.listen(3000, function () {
    console.log('Server running');
});