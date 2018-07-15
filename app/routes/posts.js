var express = require('express');
var lodash = require('lodash');
var Post = require('../models/post');

var router = express.Router();

router.get('/', function(req, res, next) {
  Post
    .fetchAll()
    .then((rows) => {
      var posts = rows.serialize();
      
      var params = {
        otherPosts: lodash.filter(posts, { featured: false }) || [],
        featuredPosts: lodash.filter(posts, { featured: true }) || [],
      };
      console.log(params);
      res.render('posts/index', params);
    });
});

module.exports = router;
