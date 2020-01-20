// dependencies
var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");

// set up port
var PORT = process.env.PORT || 3000;

var app = express();

// requiring routes
var routes = require("./routes");

// parse request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// make the public folder a static folder
app.use(express.static("public"));

//connect handlebars to express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// All the requests will have to go through route
app.use(routes);

var MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// listening to port
app.listen(PORT, function() {
  console.log("listening on port: " + PORT);
});
