const postgres = require("postgres");

const sql = postgres('postgres://postgres:Test@localhost:5432/postgres', {
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    username: 'postgres',
    password: 'Test',
})


module.exports = sql;
