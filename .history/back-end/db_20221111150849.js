const fs = require('fs');
const Pool = require('pg').Pool;
const fastcsv = require('fast-csv');

csvData.shift()

const pool = new Pool({
    user: "isabelleoktay",
    host: "localhost",
    database: "movies",
    password: "test",
    port: 5432,
});

module.exports = pool;