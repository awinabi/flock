const bookshelf = require('../../config/bookshelf');

const NewsItem = bookshelf.Model.extend({
  tableName: 'news_items',
  hasTimestamps: true,
});

module.exports = NewsItem;
