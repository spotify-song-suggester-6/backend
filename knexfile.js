require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: "postgres://ojiogqxh:gSHuLM6E_QxRPJzKlcT_oe6ar6KNCUxf@drona.db.elephantsql.com:5432/ojiogqxh",
    migrations: {
      directory: './database/migrations',
    },
    seeds: { directory: './database/seeds' },
    pool: {min: 2, max: 20}
  },

  testing: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './database/migrations',
    },
    seeds: { directory: './database/seeds' },
    pool: {min: 2, max: 20}
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './database/migrations',
    },
    seeds: { directory: './data/seeds' },
    pool: {min: 2, max: 20}
  },
};