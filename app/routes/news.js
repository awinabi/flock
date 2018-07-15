var express = require('express');
var fixtures = require('../../fixtures');
var NewsItem = require('../models/news_item');
var lodash = require('lodash');

var router = express.Router();

router.get('/', function(req, res, next) {
  NewsItem
    .fetchAll()
    .then((rows) => {
      var params = {
        newsItems: rows.serialize()
      }
      res.render('news/index', params);
    });
});

module.exports = router;
