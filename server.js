require('dotenv').config();
var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller");

var PORT = process.env.PORT || 8040;
var app = express();

app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

// Starts server
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
