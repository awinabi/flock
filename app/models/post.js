const bookshelf = require('../../config/bookshelf');

const Post = bookshelf.Model.extend({
  tableName: 'posts',
  hasTimestamps: true,
});

module.exports = Post;