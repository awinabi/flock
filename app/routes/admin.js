var express = require('express');
const knexConfig = require('../../config/knexfile');
var app = express();
const knex = require('knex')(knexConfig[app.get('env')]);

var router = express.Router();

router.get('/migrate', function(req, res, next) {
  knex.migrate.latest();
  res.send('success!')
});

module.exports = router;
