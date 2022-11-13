const Pool = require('pg').Pool;

const pool = new Pool({
    user: "isabelleoktay",
    host: "localhost",
    database: "movies",
    password: "",
    port: 5432,
})