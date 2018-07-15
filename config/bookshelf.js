const express = require('express');
const knexConfig = require('./knexfile');

var app = express();
const knex = require('knex')(knexConfig[app.get('env')]);
const bookshelf = require('bookshelf')(knex);

bookshelf.plugin('case-converter');

module.exports = bookshelf;