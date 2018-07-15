
exports.up = function(knex, Promise) {
  return knex.schema.createTable('topics', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.dateTime('created_at');
    table.dateTime('updated_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.createTable('topics');
};
