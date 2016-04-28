var mongoose = require('mongoose');
var PlaceSucre = mongoose.model('placeSucre');
//var PlaceSucre = require('../models/place');

//GET - Return all places in the DB
exports.findAllPlacesSucre = function(req, res){
  PlaceSucre.find(function(err, placesSucre){
    if(err) res.send(500, err.message);

    console.log('GET /placesSucre');
    res.status(200).jsonp(placesSucre);
  });
};

exports.findById = function(req, res){
  PlaceSucre.findById(req.params.id, function(err, placeSucre){
    if(err) return res.send(500, err.message);

    console.log('GET /placesSucre/' + req.params.id);
    res.status(200).jsonp(placeSucre);
  });
};

exports.addPlaceSucre = function(req, res){
  console.log('POST /addPlaceSucre/');
  console.log(req.body);
   var placeSucre = new PlaceSucre({
     name: req.body.name,
     rating: req.body.rating,
     address: req.body.address,
     description: req.body.description,
     pathImage: req.body.pathImage
   });

   placeSucre.save(function(err, placeSucre){
     if(err) return res.status(500).send(err.message);
     res.status(200).jsonp(placeSucre);
   });
};

exports.updatePlaceSucre = function(req, res){
  console.log('PUT /placesSucre/' + req.body.name);
  PlaceSucre.findById(req.params.id, function(err, placeSucre){
    if(err) return res.status(500).send(err.message);
    placeSucre.name = req.body.name;
    placeSucre.rating = req.body.rating;
    placeSucre.address = req.body.address;
    placeSucre.description = req.body.description;
    placeSucre.pathImage = req.body.pathImage;

    placeSucre.save(function(err){
      if(err) return res.status(500).send(err.message);
      res.status(200).jsonp(placeSucre);
    });
  });
};

exports.deletePlaceSucre = function(req, res){
  PlaceSucre.findById(req.params.id, function(err, placeSucre){
    placeSucre.remove(function(err){
      if(err) return res.status(500).send(err.message);
      res.status(200).send('ok');
    });
  });
};
