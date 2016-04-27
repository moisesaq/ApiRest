var mongoose = require('mongoose');
  Schema = mongoose.Schema;

var placeSucre = new Schema({
  name: { type: String },
  rating: { type: String },
  address: { type: String },
  description: { type: String},
  pathImage: { type: String}
});

module.exports = mongoose.model('placeSucre', placeSucre);
