
exports.up = function(knex, Promise) {
  return knex.schema.createTable('news_items', (table) => {
    table.increments('id').primary();
    table.string('title');
    table.text('url');
    table.text('domain');
    table.string('tags');
    table.dateTime('submitted_at');
    table.dateTime('created_at');
    table.dateTime('updated_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('news_items');
};
