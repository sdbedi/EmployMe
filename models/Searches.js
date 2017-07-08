let mongoose = require('mongoose');

let SearchSchema = new mongoose.Schema({
  keyword: String,
  location: String,
  ipAddress: String,
  timestamp: String
});

mongoose.model('Search', SearchSchema);