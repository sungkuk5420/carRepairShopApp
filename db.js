var secret_config = require("./secret");
var mysql = require("mysql");
DATABASE = secret_config.federation.db.database;
handleDisconnect();

function handleDisconnect() {
  // Recreate the connection, since
  // the old one cannot be reused.
  client = mysql.createConnection({
    host: secret_config.federation.db.host,
    port: secret_config.federation.db.port,
    user: secret_config.federation.db.user,
    password: secret_config.federation.db.password
  });

  client.connect(function(err) {
    // The server is either down
    if (err) {
      // or restarting (takes a while sometimes).
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    } // to avoid a hot loop, and to allow our node script to
  }); // process asynchronous requests in the meantime.
  // If you're also serving http, display a 503 error.
  client.on("error", function(err) {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      // Connection to the MySQL server is usually
      handleDisconnect(); // lost due to either server restart, or a
    } else {
      // connnection idle timeout (the wait_timeout
      throw err; // server variable configures this)
    }
  });
  client.query("USE " + DATABASE);
}

var mysqlUtil = (module.exports = {
  seletTable: function(data, res) {
    console.log("seletTable start " + JSON.stringify(data));
    var tableName = data.tableName;
    var fields = data.fields != undefined ? data.fields : "*";
    var whereStr = data.whereStr != undefined ? data.whereStr : "";
    console.log(data);
    // if((fields.indexOf('password') != -1) || ((fields.indexOf('*') != -1) && (tableName.indexOf('users') != -1))){
    if (fields.indexOf("*") != -1 && tableName.indexOf("users") != -1) {
      console.log("break");
      res.end("error");
      return false;
    }
    var queryString = `SELECT ${fields} FROM ${tableName} ${whereStr}`;
    console.log(queryString);

    client.query(queryString, function(error, result, fields) {
      if (error) {
        console.log(error);
        res.end(JSON.stringify(error));
      } else {
        console.log(result);
        res.end(JSON.stringify(result));
      }
    });
  },

  insertUser: function(data, res) {
    console.log("insertUser start " + JSON.stringify(data));
    var id = data.id;
    var car_number = data.car_number;
    var password = data.password;
    var phone_number = data.phone_number;
    var user_name = data.user_name;
    var car_type = data.car_type;
    var car_km = data.car_km;
    var thumbnail_image = data.thumbnail_image;
    var profile_image = data.profile_image;
    var user_level = data.user_level;
    var login_type = data.login_type;
    // var queryString = `INSERT INTO users (id, car_number,password,phone_number,user_name,car_type,car_km,thumbnail_image,profile_image,user_level,login_type) VALUES('${id}',${car_number}','${password}','${phone_number}','${user_name}','${car_type}','${car_km}','${thumbnail_image}','${profile_image}','${user_level}','${login_type}')`;
    var queryString = "INSERT INTO users (";
    queryString += id != null ? "id," : "";
    queryString += car_number != null ? "car_number," : "";
    queryString += password != null ? "password," : "";
    queryString += phone_number != null ? "phone_number," : "";
    queryString += user_name != null ? "user_name," : "";
    queryString += car_type != null ? "car_type," : "";
    queryString += car_km != null ? "car_km," : "";
    queryString += thumbnail_image != null ? "thumbnail_image," : "";
    queryString += profile_image != null ? "profile_image," : "";
    queryString += user_level != null ? "user_level," : "";
    queryString += login_type != null ? "login_type" : "";
    queryString += ") VALUES(";
    queryString += id != null ? `'${id}',` : "";
    queryString += car_number != null ? `'${car_number}',` : "";
    queryString += password != null ? `'${password}',` : "";
    queryString += phone_number != null ? `'${phone_number}',` : "";
    queryString += user_name != null ? `'${user_name}',` : "";
    queryString += car_type != null ? `'${car_type}',` : "";
    queryString += car_km != null ? `'${car_km}',` : "";
    queryString += thumbnail_image != null ? `'${thumbnail_image}',` : "";
    queryString += profile_image != null ? `'${profile_image}',` : "";
    queryString += user_level != null ? `'${user_level}',` : "";
    queryString += login_type != null ? `'${login_type}')` : "";
    console.log("queryString : ", queryString);
    client.query(queryString, function(error, result, fields) {
      if (error) {
        console.log(error);
        res.end(JSON.stringify(error));
      } else {
        console.log(result);
        res.end(JSON.stringify(result));
      }
    });
  },

  updateUser: function(data, res) {
    console.log("changeUserInfo start " + JSON.stringify(data));
    var id = data.id;
    var car_number = data.car_number;
    var password = data.password;
    var phone_number = data.phone_number;
    var user_name = data.user_name;
    var car_type = data.car_type;
    var car_km = data.car_km;
    var thumbnail_image = data.thumbnail_image;
    var profile_image = data.profile_image;
    var user_level = data.user_level;
    var login_type = data.login_type;
    // var queryString = `INSERT INTO users (id, car_number,password,phone_number,user_name,car_type,car_km,thumbnail_image,profile_image,user_level,login_type) VALUES('${id}',${car_number}','${password}','${phone_number}','${user_name}','${car_type}','${car_km}','${thumbnail_image}','${profile_image}','${user_level}','${login_type}')`;
    var queryString = "update users set ";
    queryString += car_number != null ? `car_number='${car_number}',` : "";
    queryString += password != null ? `password='${password}',` : "";
    queryString +=
      phone_number != null ? `phone_number='${phone_number}',` : "";
    queryString += user_name != null ? `user_name='${user_name}',` : "";
    queryString += car_type != null ? `car_type='${car_type}',` : "";
    queryString += car_type != null ? `car_type='${car_type}',` : "";
    queryString += car_km != null ? `car_km='${car_km}',` : "";
    queryString +=
      thumbnail_image != null ? `thumbnail_image='${thumbnail_image}',` : "";
    queryString +=
      profile_image != null ? `profile_image='${profile_image}',` : "";
    queryString += user_level != null ? `user_level='${user_level}' ` : "";

    queryString += `where id = '${id}'`;
    console.log("queryString : ", queryString);
    client.query(queryString, function(error, result, fields) {
      if (error) {
        console.log(error);
        res.end(JSON.stringify(error));
      } else {
        console.log(result);
        res.end(JSON.stringify(result));
      }
    });
  },
  deleteUser: function(data, res) {
    console.log("changeUserInfo start " + JSON.stringify(data));
    var id = data.id;
    var queryString = "delete from users ";
    queryString += `where id = '${id}'`;
    console.log("queryString : ", queryString);
    client.query(queryString, function(error, result, fields) {
      if (error) {
        console.log(error);
        res.end(JSON.stringify(error));
      } else {
        console.log(result);
        res.end(JSON.stringify(result));
      }
    });
  }
});
