const mysql = require('mysql')
module.exports = {
    con: mysql.createConnection({
        host: 'webitcloud.net',
        user: 'webitclo_tsiw',
        password: 'BD#pw2#TSIW',
        database: 'webitclo_teste'
    })
}