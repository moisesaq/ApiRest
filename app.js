var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//Connection to DB
mongoose.connect('mongodb://localhost/placesSucre', function(err, res){
  if(err){
    console.log('ERROR: connecting to DataBase. ' + err);
  }else{
    console.log('Connected to DataBase');
  }
});

// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var PlaceSucreCtrl = require('./controllers/showPlaces');

//Example route
// var router = express.Router();
// app.get('/', function(req, res){
//   res.send('Hello world! Welcome Moises Apaza');
// });
// app.use(router)

//API router
var showPlaces = express.Router();

showPlaces.route('/placesSucre')
.get(PlaceSucreCtrl.findAllPlacesSucre)
.post(PlaceSucreCtrl.addPlaceSucre);

showPlaces.route('/placeSucre/:id')
.get(PlaceSucreCtrl.findById)
.put(PlaceSucreCtrl.updatePlaceSucre)
.delete(PlaceSucreCtrl.deletePlaceSucre);

app.use('/api', showPlaces);


//Start server
app.listen(3000, function(){
    console.log('Node server running on localhost in port 3000');
});
