
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id').primary();
    table.string('title');
    table.text('description');
    table.text('content');
    table.string('author');
    table.string('tags');

    table.dateTime('published_at');
    table.boolean('featured');
    table.dateTime('created_at');
    table.dateTime('updated_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
