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
    debug: true,
    connection: {
      database: process.env.SQL_DATABASE,
      user: process.env.SQL_USER,
      password: process.env.SQL_PASSWORD,
      host: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
      // host: process.env.SQL_HOST,
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

};

