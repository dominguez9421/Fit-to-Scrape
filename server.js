// dependencies
var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

// set up port
var PORT = process.env.PORT || 3000;

var app = express();

// requiring routes
var routes = require("./routes");

// parse request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser());

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// make the public folder a static folder
app.use(express.static("public"));

//connect handlebars to express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// All the requests will have to go through route
app.use(routes);

var MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/news_articles_db";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true
  // useCreateIndex: true
});

// mongoose.connect(MONGOLAB_SILVER_URI);

// listening to port
app.listen(PORT, function() {
  console.log("listening on port: " + PORT);
});
