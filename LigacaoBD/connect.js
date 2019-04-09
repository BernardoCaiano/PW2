const mysql = require('mysql')
module.exports = {
    con: mysql.createConnection({
        host: 'webitcloud.net',
        user: 'webitclo_teste',
        password: '1J15,~H{H)oT',
        database: 'webitclo_teste'
    })
}
