const mysql = require("mysql");

if(process.env.NODE_ENV === production) {
  var connection = mysql.createConnection(process.env.JAWSDB)
}
else {
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "newpass",
  database: "burgers_db"
});
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
