require('dotenv').config({ path: '.env.development' })

import type { Knex } from "knex";

// Update with your config settings.

const config: Record<'development' | 'staging' | 'production', Knex.Config> = {
  development: {
    client: 'pg',
    connection: process.env.POSTGRES_PRISMA_URL,
    migrations: {
      extension: 'ts'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}

module.exports = config.development;
