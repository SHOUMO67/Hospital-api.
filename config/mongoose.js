const mongoose = require('mongoose');
// Mongodb connection

mongoose.connect('mongodb+srv://shoumodip:shoumo@cluster0.scxf24d.mongodb.net/?retryWrites=true&w=majority');


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;
