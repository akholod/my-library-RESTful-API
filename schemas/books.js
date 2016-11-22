/**
 * Created by andrey on 21.11.16.
 */
'use strict';
var mongoose = require('mongoose');

// define the schema for our book model
var bookSchema = mongoose.Schema({
    title: { type: String, required: true, unique: true},
    language: String,
    image: String,
    authors: Array,
    pageCount: Number
});

module.exports = mongoose.model('Book', bookSchema);