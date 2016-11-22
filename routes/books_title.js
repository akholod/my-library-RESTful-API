/**
 * Created by andrey on 22.11.16.
 */
'use strict';
const express = require('express');
const router = express.Router();
const BooksModel = new require('../schemas/books');

router.route('/books/:book_title')
    .get(function(req,res) { //get single book by title
        BooksModel.findOne({title: req.params.book_title}, (err, book) => {
            if (err) {
                res.status(500).send("Database error");
                return new Error(err);
            }
            if(!book) {
                return res.json({ message: 'Book not found' });
            }
            res.json(book);
        });
    })
    .put(function(req, res) {//update book title in db, request body must have new title as 'UpdateTitle'
        BooksModel.update({title: req.params.book_title}, {title: req.body.UpdateTitle},(err) => {
            if (err) {
                res.status(500).send("Database error");
                return new Error(err);
            }
            res.json({ message: 'Successfully updated' });
        })
    })
    .delete(function(req, res) {  //delete book from db by title
        BooksModel.remove({title: req.params.book_title}, (err) => {
            console.log(req.params.book_title);
            if (err) {
                res.status(500).send("Database error");
                return new Error(err);
            }
        });
        res.json({ message: 'Successfully deleted' });
});

module.exports = router;
