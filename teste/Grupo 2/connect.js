const mysql = require('mysql')

// ligação à BD
module.exports = {
    con: mysql.createConnection({
        host: 'webitcloud.net',
        user: 'webitclo_tsiw',
        password: 'PW#2%esmad',
        database: 'webitclo_tsiw19'
    })
}
