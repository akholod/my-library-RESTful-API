/**
 * Created by andrey on 22.11.16.
 */
'use strict';
const express = require('express');
const router = express.Router();
const BooksModel = new require('../schemas/books');

router.route('/books/:book_title')
    .get(function(req,res) {

        BooksModel.findOne({title: req.params.book_title}, (err, book) => {
            if (err) {
                res.status(500).send("Database error");
                return new Error(err);
            }
            if(!book) {
                res.json({ message: 'Book not found' });
            }
            res.json(book);
        });
    })
    .put(function(req, res) {
        BooksModel.update({title: req.params.book_title}, {title: req.body.UpdateTitle},(err) => {
            if (err) {
                res.status(500).send("Database error");
                return new Error(err);
            }
            res.json({ message: 'Successfully updated' });
        })
    })
    .delete(function(req, res) {
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
