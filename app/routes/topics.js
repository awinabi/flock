var express = require('express');
var fixtures = require('../../fixtures');
var Post = require('../models/post');
var lodash = require('lodash');

var router = express.Router();

router.get('/:topicName', function(req, res, next) {
  var posts = [];
  const topicName = req.params.topicName;
  Post
    .fetchAll()
    .then((rows) => {
      posts = rows;
    });
  var topicPosts = lodash.find(posts, function(o){ o.tags.indexOf(topicName) > 0; });
  var params = {
    otherPosts: topicPosts || [],
    featuredPosts: [],
  }

  res.render('posts/index', params);
});

module.exports = router;
