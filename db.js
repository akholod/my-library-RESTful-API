/**
 * Created by andrey on 22.11.16.
 */
'use strict';
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI);
//create db connection
var db = mongoose.connection;

//db connect log
db.on('error', console.error.bind(console, 'connection error:'));
console.log('moongoose connect');

module.exports = db;


