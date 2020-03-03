require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: "postgres://ojiogqxh:gSHuLM6E_QxRPJzKlcT_oe6ar6KNCUxf@drona.db.elephantsql.com:5432/ojiogqxh",
    migrations: {
      directory: './database/migrations',
    },
    seeds: { directory: './database/seeds' },
  },

  testing: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './database/migrations',
    },
    seeds: { directory: './database/seeds' },
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './database/migrations',
    },
    seeds: { directory: './data/seeds' },
  },
};