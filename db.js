/**
 * Created by andrey on 22.11.16.
 */
'use strict';
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI);
//create db connection
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
console.log('moongoose connect');
module.exports = db;

//mongodb://akholod:3v1a6l0e0r2a@ds159517.mlab.com:59517/books_restful_api