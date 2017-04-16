var mongoose = require('mongoose');
var config   = require('./config');

var connStr = config.database.url;

mongoose.Promise = global.Promise;
mongoose.connect(connStr); 

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
  console.log("Connection with database succeeded.");
});

exports.db = db;