const bookshelf = require('../../config/bookshelf');

const Topic = bookshelf.Model.extend({
  tableName: 'topics',
  hasTimestamps: true,
});

module.exports = Topic;