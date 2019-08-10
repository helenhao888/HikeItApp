// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
// require("dotenv");
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Requiring our models for syncing
var db = require("./models");

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Static directory
app.use(express.static("public"));

//For passport
app.use(session({ secret: 'my secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

<<<<<<< HEAD
=======
// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

>>>>>>> 6294c73986bbae936a84a75904f0c5afd0e506e4
// Routes
// =============================================================
require("./controllers/trail_controller.js")(app);

var authRoute = require('./controllers/auth.js')(app, passport);

//Load passport strategies
require('./config/passport.js')(passport, db.User);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

<<<<<<< HEAD




// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
//var routes = require("./controllers/trail_controller.js");


=======
>>>>>>> 6294c73986bbae936a84a75904f0c5afd0e506e4
