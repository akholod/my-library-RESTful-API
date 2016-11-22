/**
 * Created by andrey on 22.11.16.
 */
'use strict';
const express = require('express');
const router = express.Router();
const booksGoogle = require('google-books-search');
const BooksModel = new require('../schemas/books');
router.route('/books')
    .post((req, res) => {
        let bookSearchOptions = {
            limit: 1,
            type: 'books'
        };
        if(req.body.bookTitle.length < 3) {
            return res.json('{"error": "Book title is to short"}')
        }
        if(req.body.bookLang) {
            bookSearchOptions.lang = req.body.bookLang;
        }

        booksGoogle.search(req.body.bookTitle, bookSearchOptions, (error, results) => {
            if (error) {
                let book = new BooksModel();
                book.title = req.body.bookTitle;
                book.save(function(err) {
                    if (err) {
                        res.status(500).send("Database error");
                        return new Error(err);
                    }
                    return console.log('Book added without description');
                });
                return console.log(error);
            }
            results = results[0];
            BooksModel.findOne({'title': results.title}, (err, book) => {
                if (err) {
                    res.status(500).send("Database error");
                    return new Error(err)
                }
                if (book) {
                    return res.json({"error": "Book already added"});
                }
            });

            let book = new BooksModel();
            book.title = results.title;
            book.language = results.language;
            book.image = results.thumbnail;
            book.authors = results.authors;
            book.pageCount = results.pageCount;
            book.save(function(err) {
                if (err) {
                    res.status(500).send("Database error");
                    return new Error(err);
                }
                return console.log('Book added');
            });

        });
    }).get((req,res) => {
        BooksModel.find(function(err, books) {
            if (err) {
                res.status(500).send("Database error");
                return new Error(err);
            }
            res.json(books);
        });
    });

module.exports = router;
