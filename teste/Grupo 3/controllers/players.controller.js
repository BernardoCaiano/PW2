const connectL = require("../connect.js")

//Guardar os dados numa tabela da Base de Dados (SQL) 
function send(get, resp) {
    if (get.body.User != "" & get.body.Email != "" & get.body.password != "" ) {
        //Enviar os dados para a base de dados utilizando o formulário criado.
        connectL.con.query(`INSERT INTO player VALUES(${get.body.User}", "${get.body.Email}", "${get.body.password}")`, (err, result) => {
            if (err) {
                throw (err)
            }
        })
    }
}

module.exports = {
    send
}