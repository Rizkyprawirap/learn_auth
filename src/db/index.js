const { Pool } = require('pg');

// Connection to psql 
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pern_auth',
    password: 'admin',
    port: 5432
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
