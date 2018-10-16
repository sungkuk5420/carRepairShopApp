
var secret_config = require('./secret');
var mysql = require('mysql')
    DATABASE = secret_config.federation.db.database,
    client = mysql.createConnection({
        host: secret_config.federation.db.host,
        port: secret_config.federation.db.port,
        user: secret_config.federation.db.user,
        password: secret_config.federation.db.password
    });
var result = client.connect();
client.query('USE ' + DATABASE);

var mysqlUtil = module.exports = {
   seletTable : function (data, res) {
        console.log("seletTable start " + JSON.stringify(data));
        var tableName = data.tableName;
        var fields = data.fields;
        var whereStr = data.whereStr != undefined ? data.whereStr : '';
        console.log('SELECT * FROM '+data.tableName+whereStr,);
        client.query(`SELECT ${fields} FROM ${tableName} ${whereStr}`, function (error, result, fields) {
            if (error) {
                console.log(error);
                res.end(JSON.stringify(error));
            } else {
                console.log(result);
                res.end(JSON.stringify(result));
            }
        })
    }
};
