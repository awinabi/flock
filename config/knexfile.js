// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'starterapps_dev',
      user: 'sapp',
      password: 'porqu@123',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname + '/../migrations',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'starterapps_stage',
      user: 'sapp',
      password: 'porqu@123',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname + '/../migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'starterapps',
      user: 'sapp',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname + '../migrations',
    },
  },

};

