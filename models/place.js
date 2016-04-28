var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var placeSucreSchema = new Schema({
  name: { type: String },
  rating: { type: String },
  address: { type: String },
  description: { type: String},
  pathImage: { type: String}
});

module.exports = mongoose.model('placeSucre', placeSucreSchema);
