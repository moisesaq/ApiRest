var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

app.get('/', function(req, res){
  res.send('Hello world!');
});

app.use(router);

app.listen(3000, function(){
    console.log('Node server listen in port 3000');
});
