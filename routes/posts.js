var express = require('express');
var fixtures = require('../fixtures');
var lodash = require('lodash');

var router = express.Router();

router.get('/', function(req, res, next) {
  var posts = fixtures.posts;
  var params = {
    posts: posts,
    featuredPost: lodash.first(posts)
  }
  res.render('posts/home', params);
});

module.exports = router;
