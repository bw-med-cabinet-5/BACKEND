// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/med-cabinetDB',
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
  
  testing: {
    client: 'sqlite3',
    connection: { 
      filename: ':memory:' 
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { 
      directory: './data/testing' 
    },
    
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './migrations',
    },
    pool: {
      min: 2,
      max: 10
    },
  }

};