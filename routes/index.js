/**
 * Created by andrey on 22.11.16.
 */
'use strict';
const express = require('express');
const router = express.Router();

router.use(function(req, res, next) {
  // do logging all requests
  console.log(`Request ${req.headers['x-forwarded-for']}  ${req.headers['user-agent']}`);
  console.log(req.body);
  next();
});

//get entry page
router.get('/', function(req, res) {
  res.render('index', { title: 'Books API' });
});

module.exports = router;
