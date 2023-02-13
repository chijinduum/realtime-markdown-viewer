var express = require('express');
var app = express();


// setting the view engine to EJS
app.set('view engine', 'ejs');

//the public folder to store assets
app.use(express.static(__dirname + '/public'));


//the routes for the app
app.get('/', function(req, res){
  res.render('pad');
});
app.get('/(:id)', function (req,res){
  res.render('pad');
});


//adding shareJS dependencies

var sharejs = require('share');
require('redis');


//set up redis server

var redisClient;
console.log(process.env.REDISTOGO_URL);
if (process.env.REDISTOGO_URL) {
  var rtg = require("url").parse(process.env.REDISTOGO_URL);
  redisClient = require("redis").createClient(rtg.port, rtg.hostname);
  redisClient.auth(rtg.auth.split(":")[1]);
} else {
  redisClient = require("redis").createClient();
}

//options for sharejs
var options = {
  db: {type: 'redis'},
};

//attaching our express server to shareJS

sharejs.server.attach(app, options);

// listen on port 8000 (for localhost) or the port defined for heroku

var port = process.env.PORT || 8000;
app.listen(port);
