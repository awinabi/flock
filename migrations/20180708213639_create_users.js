exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.string('email');
    table.string('encrypted_password');
    table.dateTime('created_at');
    table.dateTime('updated_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
