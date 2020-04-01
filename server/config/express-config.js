const express = require("../node_modules/express");
const bodyParser = require("../node_modules/body-parser");
const cookieParser = require("../node_modules/cookie-parser");
const expressSession = require("../node_modules/express-session");

module.exports = function() {
  const app = express();

  //To parse URL encoded data
  app.use(bodyParser.urlencoded({ extended: false }));
  //To parse json data
  app.use(bodyParser.json());
  //It parses Cookie header and populate req.cookies with an object keyed by cookie names.
  app.use(cookieParser());

  //Creates a session middleware with the given options
  app.use(
    expressSession({
      secret: "Shh, its a secret!",
      resave: true,
      saveUninitialized: true
    })
  );

  //TO DO : Set multiple static files here :
  // app.use(express.static('public'));

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    next();
  });

  require("../routes/recipe-routes.js")(app);

  return app;
};
