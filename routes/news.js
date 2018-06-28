var express = require('express');
var fixtures = require('../fixtures');
var lodash = require('lodash');

var router = express.Router();

router.get('/', function(req, res, next) {
  var news = fixtures.news;
  var params = {
    news: news
  }
  res.render('news/index', params);
});

module.exports = router;
